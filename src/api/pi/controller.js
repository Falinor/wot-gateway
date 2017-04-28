import { mapValues, pick, values } from 'lodash';

import pi from './model';

export const show = async (req, res, next) => {
  const model = await pi.model();
  res.status(200).json(model);
};

export const showProperties = async (req, res, next) => {
  const props = await pi.properties();
  const fields = ['name', 'description', 'values'];
  const obj = mapValues(props.resources, (val, key) => {
    const extracted = pick(val, fields);
    return Object.assign({ id: key }, extracted);
  });
  res.status(200).json(values(obj));
};

export const showProperty = async (req, res, next) => {
  const props = await pi.properties();
  try {
    const values = props.resources[req.params.id].data;
    res.status(200).json(values);
  } catch (err) {
    res.status(404).end();
  }
};
