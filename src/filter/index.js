import { reduce } from '../index';

const filter = (obj, predicate, filterIn = true) => (
  reduce(obj, (acc, val, key) => {
    const result = predicate(val);

    if (filterIn ? result : !result) {
      acc[key] = val;
    }

    return acc;
  })
);

export const filterIn = (obj, predicate) => filter(obj, predicate);

export const filterOut = (obj, predicate) => filter(obj, predicate, false);
