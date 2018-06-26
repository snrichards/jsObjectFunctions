export const forEach = (obj, cb) => {
  Object
    .entries(obj)
    .forEach(([key, value]) => {
      cb(value, key, obj);
    });
};
