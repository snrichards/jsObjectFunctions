export const some = (obj, predicate) => (
  Object
    .entries(obj)
    .some(([key, value]) => (
      predicate(value, key, obj)
    ))
);
