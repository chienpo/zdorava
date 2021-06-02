interface QueryBaseObject {
  [key: string]: string | number;
}

export const generateQueryString = (queryObject: QueryBaseObject) => {
  const stringifyQueryObject = Object.entries(queryObject).reduce(
    (accumulator, [key, value]) => ({
      [key]: JSON.stringify(value),
      ...accumulator,
    }),
    {}
  );

  return `?${new URLSearchParams(stringifyQueryObject)}`;
};
