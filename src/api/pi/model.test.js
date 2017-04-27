import test from 'ava';

import pi from './model';

test('Pi', t => {
  t.truthy(pi);
  t.truthy(pi.model);
  t.is(typeof pi.model, 'object');
});

test('Pi.model', t => {
  const model = pi.model;
  t.truthy(model);
  t.is(typeof model, 'object');
});

test('Pi.actions()', async t => {
  const actions = await pi.actions();
  t.truthy(actions);
  t.is(typeof actions, 'object');
  t.is(typeof actions.resources, 'object');
  t.is(typeof actions.resources.ledState, 'object');
});

test('Pi.properties()', async t => {
  const properties = await pi.properties();
  t.truthy(properties);
  t.is(typeof properties, 'object');
  t.is(typeof properties.resources, 'object');
  t.is(typeof properties.resources.temperature, 'object');
  t.is(typeof properties.resources.humidity, 'object');
  t.is(typeof properties.resources.pir, 'object');
  t.is(typeof properties.resources.leds, 'object');
});

