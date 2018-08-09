const Hoek = require('hoek');

const advertiser = require('./API/advertiser');
const optin = require('./API/optInList');
const optinNumbers = require('./API/optInNumbers');
const generateApiId = require('./API/generatApiId');

const sdk = {};

module.exports = (userConfig) => {
  const defaults = {
    API_URL: 'https://mcpn.us/limeApi',
  };

  const config = Hoek.applyToDefaults(defaults, userConfig, true);

  Hoek.assert(config.ADMIN_API_ID, 'ADMIN_API_ID Cannot be empty!');
  Hoek.assert(config.ADMIN_USERNAME, 'ADMIN_USER Cannot be empty');

  sdk.advertiser = advertiser(config);
  sdk.optInList = optin(config);
  sdk.optInNumbers = optinNumbers(config);
  sdk.generateApiId = generateApiId(config);

  return sdk;
};
