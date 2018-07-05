import { some } from './index';

describe('some', () => {
  it('should return true if any property value passes the predicate', () => {
    const obj = {
      one: 1,
      two: 2,
      three: 3,
      five: 5,
    };
    const result = some(obj, (val) => val % 2 === 0);
    expect(result).toBe(true);
  });

  it('should return false if all property values fail the predicate', () => {
    const obj = {
      one: 1,
      three: 3,
      five: 5,
    };
    const result = some(obj, (val) => val % 2 === 0);
    expect(result).toBe(false);
  });
});
