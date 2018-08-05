const { assert } = require('chai');
const sinon = require('sinon');
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
// proxyrequire('../lib', {
//   'node-fetch': fetchStub,
//   '@noCallThru': true
// });

// const Provider = proxyquire('../src/a.provider', {
//   './b.provider': {
//     getThing: () => 'b-thing',
//     '@noCallThru': true
//   },
// });


const lib = require('../lib')

describe('Lime Celullar SDK', function () {

  describe('config', function () {

    it('should throw if ADMIN_API is not set', function () {
      const throws = () => lib({ ADMIN_API: 'FOO' });
      assert.throws(throws);
    });

    it('should throw if ADMIN_USERNAME is not set', function () {
      const throws = () => lib({ ADMIN_USERNAME: 'FOO' });
      assert.throws(throws);
    });
  });

  describe('advertiser api', function () {
    let sdk;
    
    before(function () {
      const creds = {
        ADMIN_API_ID: 'supersecretapikey',
        ADMIN_USERNAME: 'luisvegerano',
      };
      sdk = lib(creds);
    });

    it('defines a function getAll', async function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=getAdvertisersList&all=true&user=luisvegerano&api_id=supersecretapikey';
      assert.isFunction(sdk.advertiser.getAll);
      await sdk.advertiser.getAll();
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(fetchStub, apiCall);
    });

    it('defines a function getById', function () {
      const apiCall = 'https://mcpn.us/limeApi?ev=getAdvertisersList&all=true';
      assert.isFunction(sdk.advertiser.getById);
    });

    it('defines a function getByUserName', function () {
      assert.isFunction(sdk.advertiser.getByUserName);
    });
  });

});