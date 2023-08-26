var data = [
  {
    productName: "Apple",
    price: 80000,
    inStock: true,
  },
  {
    productName: "Redmi",
    price: 50000,
    inStock: true,
  },
  {
    productName: "Samsung",
    price: 50000,
    inStock: false,
  },
];

const jsonString = JSON.stringify(data);
console.log(JSON.parse(jsonString));
