import test from 'ava';
import request from 'supertest';

import routes from './index';
import express from '../../services/express';

let app;

// TODO: wonder why the test does not end

test.beforeEach('Set up supertest', async () => {
  app = express(routes);
});

test('GET / - 200 OK', async t => {
  const res = await request(app)
    .get('/')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.truthy(res.body);
  const body = res.body;
  t.is(typeof body, 'object');
  t.is(typeof body.id, 'string');
  t.is(typeof body.name, 'string');
  t.is(typeof body.description, 'string');
  t.true(Array.isArray(body.tags));
  t.is(typeof body.customFields, 'object');
  t.is(typeof body.links, 'object');
});

test('GET /properties - 200 OK', async t => {
  const res = await request(app)
    .get('/properties')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.truthy(res.body);
  const body = res.body;
  t.true(Array.isArray(body));
});
