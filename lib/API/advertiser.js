const fetch = require('node-fetch');
const convert = require('xml-js');
const { URL } = require('url');

const internals = (config) => {
  return {
    apiEvent: 'getAdvertisersList',

    getAll() {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('all', true);
      url.searchParams.append('user', config.ADMIN_USERNAME);
      url.searchParams.append('api_id', config.ADMIN_API_ID);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },

    getById(advertiserId) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('advertiserId', advertiserId);
      url.searchParams.append('user', config.ADMIN_USERNAME);
      url.searchParams.append('api_id', config.ADMIN_API_ID);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },

    getByUserName(advertiserUserName) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('advertiserUserName', advertiserUserName);
      url.searchParams.append('user', config.ADMIN_USERNAME);
      url.searchParams.append('api_id', config.ADMIN_API_ID);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },
  };
};

module.exports = config => internals(config);
