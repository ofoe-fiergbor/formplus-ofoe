const covertToUpperCase = (text) => text.toUpperCase();

const sortNameAscending = (arr) => {
  return arr.sort((a, b) =>
    covertToUpperCase(a.name) < covertToUpperCase(b.name)
      ? -1
      : covertToUpperCase(a.name) > covertToUpperCase(b.name)
      ? 1
      : 0
  );
};

const sortNameDescending = (arr) => {
  return arr.sort((a, b) =>
    covertToUpperCase(a.name) > covertToUpperCase(b.name)
      ? -1
      : covertToUpperCase(a.name) < covertToUpperCase(b.name)
      ? 1
      : 0
  );
};

const dateDescending = (arr) => {
  return arr.sort((a, b) => new Date(b.created) - new Date(a.created));
};
const dateAscending = (arr) => {
  return arr.sort((a, b) => new Date(a.created) - new Date(b.created));
};

module.exports = {
  sortNameAscending,
  sortNameDescending,
  dateAscending,
  dateDescending,
};
