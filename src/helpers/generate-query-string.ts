interface QueryBaseObject {
  [key: string]: string | number;
}

export const generateQueryString = (queryObject: QueryBaseObject) => {
  // eslint-disable-next-line unicorn/no-reduce
  const stringifiedQueryObject = Object.entries(queryObject).reduce(
    (accumulator, [key, value]) => {
      return { [key]: JSON.stringify(value), ...accumulator };
    },
    {}
  );

  return `?${new URLSearchParams(stringifiedQueryObject)}`;
};
