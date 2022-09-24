//'use strict';

const axios = require('axios')

/**
 * trigger-bitbucket-pipeline.js controller
 *
 * @description: A set of functions called "actions" of the `trigger-bitbucket-pipeline` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    const url = strapi.config.get('plugins.trigger-bitbucket-pipeline.url');
    const user = strapi.config.get('plugins.trigger-bitbucket-pipeline.user');
    const passwd = strapi.config.get('plugins.trigger-bitbucket-pipeline.passwd');
    const body = { target: {
      ref_type: 'branch',
      type: 'pipeline_ref_target',
      ref_name: 'master'
    }};
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    if(user) {
      config = {
        ...config,
        auth: {
          username: user,
          password: passwd
        }
      }
    }
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

    // Send 200 `ok`
  }
};
