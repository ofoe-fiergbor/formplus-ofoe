const covertToUpperCase = (text) => text.toUpperCase();

export const sortNameAscending = (arr) => {
  return arr.sort((a, b) =>
    covertToUpperCase(a.name) < covertToUpperCase(b.name)
      ? -1
      : covertToUpperCase(a.name) > covertToUpperCase(b.name)
      ? 1
      : 0
  );
};

export const sortNameDescending = (arr) => {
  return arr.sort((a, b) =>
    covertToUpperCase(a.name) > covertToUpperCase(b.name)
      ? -1
      : covertToUpperCase(a.name) < covertToUpperCase(b.name)
      ? 1
      : 0
  );
};

export const dateDescending = (arr) => {
  return arr.sort((a, b) => new Date(b.created) - new Date(a.created));
};
export const dateAscending = (arr) => {
  return arr.sort((a, b) => new Date(a.created) - new Date(b.created));
};
