import test from 'ava';
import request from 'supertest';

import routes from './index';
import express from '../services/express';

let app;

test.beforeEach('Init supertest', async () => {
  app = express(routes);
});

test('Pi route', async t => {
  const res = await request(app)
    .get('/pi')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.truthy(res.body);
  t.is(typeof res.body, 'object');
});

test('Main route', async t => {
  const res = await request(app)
    .get('/')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.truthy(res.body);
  t.is(typeof res.body, 'string');
  t.is(res.body, 'Welcome to Web of Things API');
});

