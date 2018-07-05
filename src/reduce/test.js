import { reduce } from './index';

describe('reduce', () => {
  it('should add all properties together', () => {
    const obj = {
      one: 1,
      two: 2,
    };
    const result = reduce(obj, (acc, val) => acc + val, 0);
    expect(result).toBe(3);
  });

  it('should default to an empty object', () => {
    const obj = {
      one: 1,
      two: 2,
    };
    const result = reduce(obj, (acc) => acc);
    expect(Object.keys(result).length).toBe(0);
  });
});
