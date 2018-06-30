export const every = (obj, predicate) => (
  Object
    .entries(obj)
    .every(([key, value]) => (
      predicate(value, key, obj)
    ))
);
