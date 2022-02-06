const {
  sortNameAscending,
  sortNameDescending,
  dateAscending,
  dateDescending,
} = require("./Utils");

let testData = [
  { name: "incididunt Excepteur ipsum", created: "2022-02-06T20:55:55.412647" },
  { name: "Voluptate Veniam, Ullamco", created: "2022-02-06T20:55:55.458345" },
  { name: "Adipiscing Aliqua", created: "2022-02-06T20:55:55.293526" },
];

test("Should sort template array by name in ascending order", () => {
  expect(sortNameAscending(testData)).toEqual([
    { name: "Adipiscing Aliqua", created: "2022-02-06T20:55:55.293526" },
    {
      name: "incididunt Excepteur ipsum",
      created: "2022-02-06T20:55:55.412647",
    },
    {
      name: "Voluptate Veniam, Ullamco",
      created: "2022-02-06T20:55:55.458345",
    },
  ]);
});

test("Should sort template array by name in decending order", () => {
  expect(sortNameDescending(testData)).toEqual([
    {
      name: "Voluptate Veniam, Ullamco",
      created: "2022-02-06T20:55:55.458345",
    },
    {
      name: "incididunt Excepteur ipsum",
      created: "2022-02-06T20:55:55.412647",
    },
    { name: "Adipiscing Aliqua", created: "2022-02-06T20:55:55.293526" },
  ]);
});

test("Should sort template array by created date in ascending order", () => {
    expect(dateAscending(testData)).toEqual([
        {name: "Adipiscing Aliqua", created: "2022-02-06T20:55:55.293526" },
        {name: "incididunt Excepteur ipsum",created: "2022-02-06T20:55:55.412647"},
        {name: "Voluptate Veniam, Ullamco", created: "2022-02-06T20:55:55.458345"},
    ]);
  });
  
  test("Should sort template array by created date in decending order", () => {
    expect(dateDescending(testData)).toEqual([
        {name: "Voluptate Veniam, Ullamco", created: "2022-02-06T20:55:55.458345"},
        {name: "incididunt Excepteur ipsum",created: "2022-02-06T20:55:55.412647"},
        { name: "Adipiscing Aliqua", created: "2022-02-06T20:55:55.293526" },
    ]);
  });
