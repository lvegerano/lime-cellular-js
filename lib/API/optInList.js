const fetch = require('node-fetch');
const convert = require('xml-js');
const { URL } = require('url');

const internals = (config) => {
  return {
    apiEvent: 'optInLists',

    getAll(advertiserUserName, advertiserApiId) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('all', true);
      url.searchParams.append('user', advertiserUserName);
      url.searchParams.append('api_id', advertiserApiId);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },

    getByName(advertiserUserName, advertiserApiId, listName) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('name', listName);
      url.searchParams.append('user', advertiserUserName);
      url.searchParams.append('api_id', advertiserApiId);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },

    getById(advertiserUserName, advertiserApiId, listid) {
      const url = new URL(config.API_URL);
      url.searchParams.append('ev', this.apiEvent);
      url.searchParams.append('listid', listid);
      url.searchParams.append('user', advertiserUserName);
      url.searchParams.append('api_id', advertiserApiId);
      return fetch(url.toString())
        .then((res => res.text()))
        .then(body => convert.xml2js(body));
    },
  };
};

module.exports = config => internals(config);
