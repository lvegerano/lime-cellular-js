# Lime Cellular JS

[![Build Status](https://travis-ci.org/lvegerano/lime-cellular-js.svg?branch=master)](https://travis-ci.org/lvegerano/lime-cellular-js)

This module implements a few of lime cellulars api.

## Installation
`npm lime-cellular`

## Usage
```javascript
const LimeCellular = require('lime-cellular')
const ADMIN_API_ID = 'SECRETAPIID',
const ADMIN_USERNAME = 'ADMINUSERNAME',
const json = LimeCellular.advertiser.getAll(ADMIN_USERNAME, ADMIN_API_ID);
```
# API

### Advertiser API
#### adversiser.getAll(ADMIN_USERNAME, ADMIN_API_ID)
#### adversiser.getById(ADMIN_USERNAME, ADMIN_API_ID, advertiserId)
#### adversiser.getByUserName(ADMIN_USERNAME, ADMIN_API_ID, advertiserUserName)

### Generate API ID
#### generateApiId(adminUserName, adminApiId, advertiserUserName)

### Opt-In List API
##### optInList.getAll(advertiserUserName, advertiserApiId)
##### optInList.getById(advertiserUserName, advertiserApiId, listid)
##### optInList.getByName(advertiserUserName, advertiserApiId, listName)

### Opt-In Numbers API
#### optInNumbers(advertiserUserName, advertiserApiId, optInListId, [isOnlyNumbers = false], [isWalletUrl = false])

## Licence
MIT