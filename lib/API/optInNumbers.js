const fetch = require('node-fetch');
const convert = require('xml-js');
const { URL } = require('url');

/**
 * @param {*} config
 * @returns {Function}
 */
const internals = config => (
  advertiserUserName, advertiserApiId, optInListId, isOnlyNumbers = false, isWalletUrl = false
) => {
  const url = new URL(config.API_URL);
  url.searchParams.append('ev', 'optedInNumbers');
  url.searchParams.append('user', advertiserUserName);
  url.searchParams.append('api_id', advertiserApiId);
  url.searchParams.append('optInListId', optInListId);
  url.searchParams.append('isWalletUrl', isWalletUrl);
  url.searchParams.append('isOnlyNumbers', isOnlyNumbers);
  return fetch(url.toString())
    .then((res => res.text()))
    .then(body => convert.xml2js(body));
};

module.exports = config => internals(config);
