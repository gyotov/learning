// // Object property shorthand
// const name = 'Andrew';
// const userAge = 27;

// const user = {
//   name,
//   age: userAge,
//   location: 'Philadelphia'
// };

// console.log(user);

// // Object destruct
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

// // const label = product.label;
// // const stock = product.stock;

// const { label: productLabel, stock: productStock, rating: productRating = 5 } = product;
// console.log(productLabel);
// console.log(productStock);
// console.log(productRating);

const transaction = (type, { label = 'No label', stock = 0 }) => {
  console.log(type, label, stock);
};

transaction('order', product);
