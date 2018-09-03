const { assert } = require('chai');
const sinon = require('sinon');
const { URL } = require('url');
const proxyrequire = require('proxyquire');
const mockRequire = require('mock-require');

const sandbox = sinon.createSandbox();
const { stub } = sandbox;
const fetchStub = stub();
const fetchResponse = {
  text: stub(),
};
const xml2JsStub = {
  xml2js: stub(),
};

fetchStub.resolves(fetchResponse);


mockRequire('node-fetch', fetchStub);
mockRequire('xml-js', xml2JsStub);

const sdk = require('../lib');
const ADMIN_API_ID = 'supersecretapikey';
const ADMIN_USERNAME = 'luisvegerano';

describe('Lime Celullar SDK', function () {

  describe('advertiser api', function () {
    afterEach(function () {
      sandbox.resetHistory();
    });

    it('defines a function getAll', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=getAdvertisersList&all=true&user=luisvegerano&api_id=supersecretapikey';
      assert.isFunction(sdk.advertiser.getAll);
      await sdk.advertiser.getAll(ADMIN_USERNAME, ADMIN_API_ID);
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });

    it('defines a function getById', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=getAdvertisersList&advertiserId=34&user=luisvegerano&api_id=supersecretapikey';
      assert.isFunction(sdk.advertiser.getById);
      await sdk.advertiser.getById(ADMIN_USERNAME, ADMIN_API_ID, 34);
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });

    it('defines a function getByUserName', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=getAdvertisersList&advertiserUserName=foobar&user=luisvegerano&api_id=supersecretapikey';
      assert.isFunction(sdk.advertiser.getByUserName);
      await sdk.advertiser.getByUserName(ADMIN_USERNAME, ADMIN_API_ID,'foobar');
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });
  });

  describe('opt-in lists api', function () {
    afterEach(function () {
      sandbox.resetHistory();
    });

    it('defines a function getAll', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=optInLists&all=true&user=coolAdvertiser&api_id=advertiserSecretAPI';
      assert.isFunction(sdk.optInList.getAll);
      await sdk.optInList.getAll('coolAdvertiser', 'advertiserSecretAPI');
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });

    it('defines a function getById', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=optInLists&listid=33&user=coolAdvertiser&api_id=advertiserSecretAPI';
      assert.isFunction(sdk.optInList.getById);
      await sdk.optInList.getById('coolAdvertiser', 'advertiserSecretAPI', 33);
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });

    it('defines a function getByName', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=optInLists&name=coolListName&user=coolAdvertiser&api_id=advertiserSecretAPI';
      assert.isFunction(sdk.optInList.getByName);
      await sdk.optInList.getByName('coolAdvertiser', 'advertiserSecretAPI', 'coolListName');
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });
  });

  describe('opt-in numbers api', function () {
    afterEach(function () {
      sandbox.resetHistory();
    });

    it('defines a funtion optInNumbers', async function () {
      const apiCall = new URL('https://mcpn.us/limeApi')
      apiCall.searchParams.append('ev', 'optedInNumbers');
      apiCall.searchParams.append('user', 'advertiserUserName');
      apiCall.searchParams.append('api_id', 'advertiserApiId');
      apiCall.searchParams.append('optInListId', 12323);
      apiCall.searchParams.append('isWalletUrl', false);
      apiCall.searchParams.append('isOnlyNumbers', false);

      assert.isFunction(sdk.optInList.getByName);
      await sdk.optInNumbers('advertiserUserName', 'advertiserApiId', 12323);
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall.toString());
    });
  });

  describe('generate api id', function () {
    afterEach(function () {
      sandbox.resetHistory();
    });

    it('defines a funtion generateApiId', async function () {
      const apiCall = new URL('https://mcpn.us/limeApi')
      apiCall.searchParams.append('ev', 'generateApi');
      apiCall.searchParams.append('user', 'adminUserName');
      apiCall.searchParams.append('api_id', 'adminApiId');
      apiCall.searchParams.append('account_username', 'advertiserUserName');

      assert.isFunction(sdk.optInList.getByName);
      await sdk.generateApiId('adminUserName', 'adminApiId', 'advertiserUserName');
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall.toString());
    });
  });
});
