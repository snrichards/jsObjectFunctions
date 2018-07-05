import { forEach } from './index';

describe('forEach', () => {
  it('should execute the callback for every key in the object', () => {
    const obj = {
      one: 1,
      three: 3,
      five: 5,
    };

    const spy = jest.fn();

    forEach(obj, spy);

    expect(spy.mock.calls.length).toBe(3);
  });
});
