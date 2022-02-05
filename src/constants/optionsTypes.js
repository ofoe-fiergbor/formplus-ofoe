export const sortPreferences = {
  category: "Category",
  order: "Order",
  date: "Date",
};

export const categories = {
  all: "All",
  education: "Education",
  eCommerce: "E-commerce",
  health: "Health",
};

export const sortingOrder = {
  default: "Default",
  ascending: "Ascending",
  descending: "Descending",
};

export const optionTypes = [
  {
    name: "Category",
    options: [
      { label: categories.all, value: "all" },
      { label: categories.education, value: "education" },
      { label: categories.eCommerce, value: "ecommerce" },
      { label: categories.health, value: "health" },
    ],
  },
  {
    name: "Order",
    options: [
      { label: sortingOrder.default, value: "default" },
      { label: sortingOrder.ascending, value: "ascending" },
      { label: sortingOrder.descending, value: "descending" },
    ],
  },
  {
    name: "Date",
    options: [
      { label: sortingOrder.default, value: "default" },
      { label: sortingOrder.ascending, value: "ascending" },
      { label: sortingOrder.descending, value: "descending" },
    ],
  },
];
