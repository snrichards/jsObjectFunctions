import { reduce } from '../index';

export const map = (obj, cb) => {
  let initialValue = {};

  if (obj?.constructor !== Object && typeof obj?.constructor === 'function') {
    initialValue = new obj.constructor();
  }

  return reduce(obj, (acc, val, key) => {
    acc[key] = cb(val);

    return acc;
  }, initialValue);
};
