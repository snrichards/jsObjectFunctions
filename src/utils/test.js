import { getInitialValue } from './index';

describe('getInitialValue', () => {
  it('should return an instance of the given object', () => {
    function EmptyConstructor() {}

    const obj = new EmptyConstructor();

    expect(getInitialValue(obj).constructor).toBe(EmptyConstructor);
  });

  it('should default to an empty object', () => {
    function EmptyConstructor() {}

    // override constructor to not be a function
    EmptyConstructor.prototype.constructor = 'thing';
    const obj = new EmptyConstructor();

    expect(getInitialValue(obj).constructor).toBe(Object);
  });
});
