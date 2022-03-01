//const cartModule =
const cartModule = require("./products");
// const addProduct = cartModule.addProduct
// const calculateCartTotal = cartModule.calculateCartTotal;

const testProductObj1 = {
  productList: [
    {
      productName: "Shower Gel",
      productPrice: 49.99,
      productQuantity: 5
    }
  ],
  totalPrice: "249.95"
};
// const testProductObj2 = {
//   productName: "Shower Gel",
//   productPrice: 49.99,
//   productQuantity: 8
// };

const testProductObj2 = {
  productList: [
    {
      productName: "Shower Gel",
      productPrice: 49.99,
      productQuantity: 8
    }
  ],
  totalPrice: "399.92"
};

const testCart = [
  {
    productName: "Shower Gel",
    productPrice: 49.99,
    productQuantity: 5
  }
];

//unit tests

test("Add products to the shopping cart \n The user adds 5 Shower Gels to the shopping cart", () => {
  expect(cartModule.addProduct("Shower Gel", 5)).toMatchObject(testProductObj1);
});

test("Add additional products of the same type to the shopping cart. \n And then adds another 3 Shower Gel to the shopping cart", () => {
  expect(cartModule.addProduct("Shower Gel", 3)).toMatchObject(testProductObj2);
});

test("Finding the shopping cart's total price", () => {
  expect(cartModule.calculateCartTotal(testCart)).toBe("249.95");
});

//test()