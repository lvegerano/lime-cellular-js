# Lime Cellular JS

[![Build Status](https://travis-ci.org/lvegerano/lime-cellular-js.svg?branch=master)](https://travis-ci.org/lvegerano/lime-cellular-js)

This module implements a few of lime cellulars api.

## Installation
`npm lime-cellular`

## Usage
```javascript
const config = {
  ADMIN_API_ID: 'SECRETAPIID',
  ADMIN_USERNAME: 'ADMINUSERNAME',
};
const LimeCellular = require('lime-cellular')(config);
const json = LimeCellular.advertiser.getAll();
```
# API

### Advertiser API
#adversiser.getAll()
#adversiser.getById(advertiserId)
#adversiser.getByUserName(advertiserUserName)

### Generate API ID
#generateApiId(adminUserName, adminApiId, advertiserUserName)

### Opt-In List API
#optInList.getAll(advertiserUserName, advertiserApiId)
#optInList.getById(advertiserUserName, advertiserApiId, listid)
#optInList.getByName(advertiserUserName, advertiserApiId, listName)

### Opt-In Numbers API
#optInNumbers(advertiserUserName, advertiserApiId, optInListId, [isOnlyNumbers = false], [isWalletUrl = false])

## Licence
MIT