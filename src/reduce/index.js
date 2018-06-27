import { forEach } from '../index';

export const reduce = (obj, cb, initalValue = {}) => {
  let acc = initalValue;
  forEach(obj, (val, key) => {
    acc = cb(acc, val, key);
  });
  return acc;
};
