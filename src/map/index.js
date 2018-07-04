import { reduce } from '../index';
import { getInitialValue } from '../utils';

export const map = (obj, cb) =>
  reduce(
    obj,
    (acc, val, key) => {
      acc[key] = cb(val);

      return acc;
    },
    getInitialValue(obj),
  );
