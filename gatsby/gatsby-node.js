const path = require(`path`)
const fs = require(`fs-extra`)

// const wasWirMachen = require('./src/content-data/was-wir-machen.json');

const createClubabendPages = async ({createPage, graphql, reporter}) => {
  const result = await graphql(`
    query ClubabendQuery {
      allStrapiClubabends(sort: { fields: datum, order: DESC }) {
        pageInfo {
          perPage
        }
        edges {
          node {
            id
            inhalt
            beitragsbild {
              url
              localFile {
                id
                childImageSharp {
                  resize {
                    src
                    width
                    height
                    aspectRatio
                    originalName
                  }
                  gatsbyImageData(width: 500, blurredOptions: {width: 100})
                }
                childrenImageSharp {
                  id
                }
              }
            }
            titel
            datum
          }
          next {
            id
            titel
          }
          previous {
            id
            titel
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPostTemplate = path.resolve(
    `./src/components/clubabend-post/clubabend-post.js`
  )
  result.data.allStrapiClubabends.edges.forEach(({ node, next, previous }) => {
    const p = node.id
    createPage({
      path: p,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: p,
        pagePath: p,
        beitrag: node,
        next,
        previous,
      },
    })
  })
}

const createBlogPages = async ({createPage, graphql, reporter}) => {
  const result = await graphql(`
    query Blog {
      allStrapiBlogbeitrag(sort: { fields: published_at, order: DESC }) {
        pageInfo {
          perPage
        }
        edges {
          node {
            id
            Keywords
            Slug
            Titel
            Teaser
            published_at
            Inhalt
            Beitragsbild {
              url
              localFile {
                id
                childImageSharp {
                  resize {
                    src
                    width
                    height
                    aspectRatio
                    originalName
                  }
                  gatsbyImageData(width: 500, blurredOptions: {width: 100})
                }
                childrenImageSharp {
                  id
                }
              }
            }
            Avatar {
              url
              localFile {
                id
                childImageSharp {
                  resize {
                    src
                    width
                    height
                    aspectRatio
                    originalName
                  }
                  gatsbyImageData(width: 500, blurredOptions: {width: 100})
                }
                childrenImageSharp {
                  id
                }
              }
            }
          }
          next {
            id
            Titel
          }
          previous {
            id
            Titel
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPostTemplate = path.resolve(
    `./src/components/blog/blog-post.js`
  )
  result.data.allStrapiBlogbeitrag.edges.forEach(({ node, next, previous }) => {
    const p = node.Slug
    createPage({
      path: p,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id,
        pagePath: p,
        beitrag: node,
        next,
        previous,
      },
    })
  })
}

const createMarkdownPages = async ({createPage, graphql, reporter}) => {
  const pageTemplate = path.resolve('src/templates/markdown-remark-page.js')
  const pageResult = await graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
  pageResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const p = node.id
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {
        id: p,
        pagePath: p,
        beitrag: node,
      },
    })
  })
}

const createSimpleMarkdownPages = async ({createPage, graphql, reporter}) => {
  const pageTemplate = path.resolve('src/templates/simple-markdown-page.js')
  const pageResult = await graphql(`{
    strapiTermine {
      inhalt id updatedAt
    }
    strapiNaechsterClubabend {
      inhalt id updatedAt Datum
    }
  }`)
  const markDowns = []
  markDowns.push(['Termine', '/termine', pageResult.data.strapiTermine])
  markDowns.push(['Nächster Termin', '/naechster-termin', pageResult.data.strapiNaechsterClubabend])
  markDowns.forEach(p => {
    createPage({
      path: p[1],
      component: pageTemplate,
      context: {
        id: p[2].id,
        pagePath: p[1],
        beitrag: {
          inhalt: p[2].inhalt,
          id: p[2].id,
          updatedAt: p[2].updatedAt,
          frontmatter: {
            path: p[1],
            title: p[0],
            datum: p[2].Datum
          }
        },
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  console.log('create Clubabend...')
  await createClubabendPages({graphql, createPage, reporter})
  console.log('create Blog...')
  await createBlogPages({graphql, createPage, reporter})
  console.log('create remote Markdown pages...')
  await createSimpleMarkdownPages({graphql, createPage, reporter})
  console.log('create lokale Markdown pages...')
  await createMarkdownPages({graphql, createPage, reporter})
  console.log('done create pages')

}


const getFileNode = (options) => (source, _, context, info) => {
  const { fieldName } = info
  const partialPath = source[fieldName]

  if (!partialPath) {
    return null
  }

  const filePath = path.join(__dirname, options.path, partialPath)

  const fileNode = context.nodeModel.runQuery({
    firstOnly: true,
    type: 'File',
    query: {
      filter: {
        absolutePath: {
          eq: filePath
        }
      }
    }
  })

  if (!fileNode) {
    return null
  }

  return fileNode
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: "fileByAbsolutePath",
    args: {
      path: {
        type: "String!",
        defaultValue: ""
      }
    },
    extend: (options) => ({
      resolve: getFileNode(options)
    })
  })

  createTypes(`
    type LocalContentWasWirSoMachen implements Node {
      title: String!
      text: String!
      image: File @fileByAbsolutePath(path: "src/images")
    }
  `)
}

