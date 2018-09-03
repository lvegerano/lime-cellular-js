const fetch = require('node-fetch');
const convert = require('xml-js');
const { URL } = require('url');

const internals = (config) => {
  return {
    apiEvent: 'getAdvertisersList',

    getAll(ADMIN_USERNAME, ADMIN_API_ID) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('all', true);
      url.searchParams.append('user', ADMIN_USERNAME);
      url.searchParams.append('api_id', ADMIN_API_ID);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },

    getById(ADMIN_USERNAME, ADMIN_API_ID, advertiserId) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('advertiserId', advertiserId);
      url.searchParams.append('user', ADMIN_USERNAME);
      url.searchParams.append('api_id', ADMIN_API_ID);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },

    getByUserName(ADMIN_USERNAME, ADMIN_API_ID, advertiserUserName) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('advertiserUserName', advertiserUserName);
      url.searchParams.append('user', ADMIN_USERNAME);
      url.searchParams.append('api_id', ADMIN_API_ID);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },
  };
};

module.exports = config => internals(config);
