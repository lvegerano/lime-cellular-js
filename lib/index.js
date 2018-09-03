const advertiser = require('./API/advertiser');
const optin = require('./API/optInList');
const optinNumbers = require('./API/optInNumbers');
const generateApiId = require('./API/generatApiId');


module.exports = (function LimeCell(config) {
  return {
    advertiser: advertiser(config),
    optInList: optin(config),
    optInNumbers: optinNumbers(config),
    generateApiId: generateApiId(config),
  };
}(
  {
    API_URL: 'https://mcpn.us/limeApi',
  },
));
