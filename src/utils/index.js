export const getInitialValue = (obj) => {
  // Use constructor of passed object to create the initial value
  // this ensures the return value of map/filter will be of the same type as input
  if (obj?.constructor !== Object && typeof obj?.constructor === 'function') {
    return new obj.constructor();
  }

  return {};
};
