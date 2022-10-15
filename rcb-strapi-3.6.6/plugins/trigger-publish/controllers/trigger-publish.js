'use strict';

const axios = require('axios')

/**
 * trigger-publish.js controller
 *
 * @description: A set of functions called "actions" of the `trigger-publish` plugin.
 */

module.exports = {

  index: async (ctx) => {
    const url = strapi.config.get('plugins.trigger-publish.url');
    const apiToken = strapi.config.get('plugins.trigger-publish.token');
    const body = {
        event_type: "webhook"
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'Authorization': `token ${apiToken}`
      }
    }
    console.log(`post ${url}`)
    try {
      const res = await axios.post(url, body, config);
      ctx.send({
        message: 'ok'
      });
    } catch(err) {
      console.log(err)
      ctx.error({
        message: 'error'
      });
    }
  }
};
