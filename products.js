const products = [
  { id: 1, name: "Shower Gel", price: 49.99 },
  { id: 2, name: "Deodrant", price: 99.99 },
  { id: 3, name: "Day cream", price: 9.99 },
  { id: 4, name: "Night cream", price: 19.99 }
];

const productList = [];
let finalCart = {
  productList: [],
  totalPrice: 0
};

//let productObj = {} ;

function addProduct(productName, quantity) {
  for (var x = 0; x < products.length; x++) {
    if (productName === products[x].name) {
      if (productList.length != 0) {
        console.log("Inside the if loop");
        console.log(productList);
        if (productList.length != 0) {
          const index = productList.findIndex(
            item => item.productName === productName
          );
          if (index != -1) {
            //if(vendors.find((item)=>item.Name==='Magenic'))
            //if (productList[x].productName === productName) {
            productList[index].productQuantity =
              productList[index].productQuantity + quantity;
          } else {
            let productObj = {};
            productObj.productName = productName;
            productObj.productPrice = products[x].price;
            productObj.productQuantity = quantity;
            productList.push(productObj);
          }
        }
      } else {
        let productObj = {};
        productObj.productName = productName;
        productObj.productPrice = products[x].price;
        productObj.productQuantity = quantity;
        productList.push(productObj);
      }
    }
  }
  // productList.push(productObj);
  console.log(productList);
  finalCart.productList = [...productList];
  finalCart.totalPrice = calculateCartTotal(productList).toFixed(2);
  // var total = calculateCartTotal(productList);
  //console.log("Cart Total is " + total);
  console.log(productList);
  console.log(JSON.stringify(finalCart));
  return finalCart;
}

function calculateCartTotal(productList) {
  var totalProductCost = 0.0;
  var cartTotal = 0.0;
  for (var i = 0; i < productList.length; i++) {
    totalProductCost =
      productList[i].productPrice * productList[i].productQuantity;
    cartTotal = cartTotal + totalProductCost;
  }
 // return cartTotal;
  var salesTax = addSalesTax(cartTotal);
  var totalAfterTax = cartTotal + salesTax;
  return totalAfterTax;
}

function addSalesTax(cartTotal) {
  const tax = 12.5;
  //var roundedCartTotal = Math.round(cartTotal * 100) / 100;
  //var salesTax = (roundedCartTotal * tax) / 100;
  var salesTax = (cartTotal * tax) / 100;
  return salesTax;
}

// console.log(cart);

// //console.log(products[0].name);
// function addProduct(a,b){
//     return a+b;
// }

module.exports = { addProduct, calculateCartTotal, addSalesTax };
