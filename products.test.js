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
const testProductObj4 = {
  productList: [
    {
      productName: "Shower Gel",
      productPrice: 49.99,
      productQuantity: 2
    }
  ],
  totalPrice: "112.48"
};
const testProductObj3 = {
  productList: [
    {
      productName: "Shower Gel",
      productPrice: 49.99,
      productQuantity: 2
    },
    {
      productName: "Deodrant",
      productPrice: 99.99,
      productQuantity: 2
    }
  ],
  totalPrice: "337.45"
};

const testCart = [
  {
    productName: "Shower Gel",
    productPrice: 49.99,
    productQuantity: 5
  }
];

//unit tests

// Step 1

// test("Add products to the shopping cart \n The user adds 5 Shower Gels to the shopping cart", () => {
//   expect(cartModule.addProduct("Shower Gel", 5)).toMatchObject(testProductObj1);
// });

//Step 2 for this step you should uncomment the line 67 in products.js and comment the lines 68,69,70,

// test("Add additional products of the same type to the shopping cart. \n And then adds another 3 Shower Gel to the shopping cart", () => {
//   expect(cartModule.addProduct("Shower Gel", 3)).toMatchObject(testProductObj2);
// });

// test("Finding the shopping cart's total price", () => {
//   expect(cartModule.calculateCartTotal(testCart)).toBe("249.95");
// });

test("Add products to the shopping cart", () => {
  expect(cartModule.addProduct("Shower Gel", 2)).toMatchObject(testProductObj4);
});

test("Add products to the shopping cart", () => {
  expect(cartModule.addProduct("Deodrant", 2)).toMatchObject(testProductObj3);
});

test("Calculating Sales Tax", () => {
  expect(cartModule.addSalesTax(100.0)).toBe(12.5);
});
