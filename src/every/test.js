import { every } from './index';

describe('every', () => {
  it('should return true if every property value passes the predicate', () => {
    const obj = {
      one: 1,
      three: 3,
      five: 5,
    };
    const result = every(obj, (val) => val % 2 === 1);
    expect(result).toBe(true);
  });

  it('should return false if any property value fails the predicate', () => {
    const obj = {
      one: 1,
      three: 3,
      five: 5,
      six: 6,
    };
    const result = every(obj, (val) => val % 2 === 1);
    expect(result).toBe(false);
  });
});
