'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('assert keys', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(/Marmot Platform/)
      .expect(200);
  });
});
