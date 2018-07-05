import { filterIn, filterOut } from './index';

describe('filterIn', () => {
  it('should return an object without functions', () => {
    const obj = {
      func1: () => {},
      func2: () => {},
      num: 1,
      str: 'hello',
    };
    const filteredObj = filterIn(obj, (val) => typeof val === 'function');
    expect(Object.values(filteredObj).every((item) => typeof item === 'function')).toBe(true);
  });
});

describe('filterOut', () => {
  it('should return an object without functions', () => {
    const obj = {
      func1: () => {},
      func2: () => {},
      num: 1,
      str: 'hello',
    };
    const filteredObj = filterOut(obj, (val) => typeof val === 'function');
    expect(Object.values(filteredObj).every((item) => typeof item !== 'function')).toBe(true);
  });
});
