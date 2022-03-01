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
          if (productList[x].productName === productName) {
            productList[x].productQuantity =
              productList[x].productQuantity + quantity;
            break;
          }
        }
        let productObj = {};
        productObj.productName = productName;
        productObj.productPrice = products[x].price;
        productObj.productQuantity = quantity;
        productList.push(productObj);
      }
    }
    finalCart.productList = [...productList];
    finalCart.totalPrice = calculateCartTotal(productList);
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
  
    return cartTotal.toFixed(2);
  }
  
  // console.log(cart);
  
  // //console.log(products[0].name);
  // function addProduct(a,b){
  //     return a+b;
  // }
  
  module.exports = { addProduct, calculateCartTotal };
  