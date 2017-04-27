import pi from './model';

export const show = async (req, res, next) => {
  const model = await pi.model();
  res.status(200).json(model);
};

export const showProperties = async (req, res, next) => {
  const props = await pi.properties();
  // TODO
};
