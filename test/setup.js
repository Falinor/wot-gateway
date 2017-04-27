import test from 'ava';
import { EventEmitter } from 'events'
import mockgoose from 'mockgoose'

import mongoose from '../src/services/mongoose'
import config from '../src/config'

EventEmitter.defaultMaxListeners = Infinity;

global.Array = Array;
global.Date = Date;
global.Function = Function;
global.Math = Math;
global.Number = Number;
global.Object = Object;
global.RegExp = RegExp;
global.String = String;
global.Uint8Array = Uint8Array;
global.WeakMap = WeakMap;
global.Set = Set;
global.Error = Error;
global.TypeError = TypeError;
global.parseInt = parseInt;
global.parseFloat = parseFloat;

test.before('Global setup', async () => {
  await mockgoose(mongoose);
  mongoose.connect(config.mongo.uri);
});

test.after.always('Global cleanup', () => {
  mongoose.disconnect()
});

test.afterEach.always(async () => {
  const { collections } = mongoose.connection;
  const promises = [];
  Object.keys(collections).forEach((collection) => {
    promises.push(collections[collection].remove())
  });
  await Promise.all(promises);
});
