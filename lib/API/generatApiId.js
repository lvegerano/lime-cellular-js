const fetch = require('node-fetch');
const convert = require('xml-js');
const { URL } = require('url');

/**
 * @param {*} config
 * @returns {Function}
 */
const internals = config => (
  adminUserName, adminApiId, advertiserUserName
) => {
  const url = new URL(config.API_URL);
  url.searchParams.append('ev', 'generateApi');
  url.searchParams.append('user', adminUserName);
  url.searchParams.append('api_id', adminApiId);
  url.searchParams.append('account_username', advertiserUserName);
  return fetch(url.toString())
    .then((res => res.text()))
    .then(body => convert.xml2js(body));
};

module.exports = config => internals(config);
