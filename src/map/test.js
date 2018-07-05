import { map } from './index';

describe('map', () => {
  it('should increment each property by one', () => {
    const obj = {
      one: 1,
      two: 2,
      three: 3,
    };
    const newObj = map(obj, (val) => val + 1);
    expect(Object.entries(newObj).every(([key, value]) => obj[key] + 1 === value)).toBe(true);
  });
});
