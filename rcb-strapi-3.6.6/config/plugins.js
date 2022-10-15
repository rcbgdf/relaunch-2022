module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME', null),
      api_key: env('CLOUDINARY_KEY', null),
      api_secret: env('CLOUDINARY_SECRET', null),
    },
  },
  'trigger-publish': {
    url: env('PUBLISH_API_URL', null),
    token: env('PUBLISH_API_TOKEN', null)
  }

});
