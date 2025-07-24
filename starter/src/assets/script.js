const products = [
  {
    name: "cherry",
    price: .70,
    quantity: 0,
    productId: 1,
    image: "starter/src/images/cherry.jpg"
  },
  {
    name: "orange",
    price: .60,
    quantity: 0,
    productId: 2,
    image: "starter/src/images/orange.jpg"
  },
  {
    name: "strawberry",
    price: .50,
    quantity: 0,
    productId: 3,
    image: "starter/src/images/strawberry.jpg"
  },
];

let cart = [];
let totalPaid = 0;
let lastCartTotal = 0;


function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);
  const existingCartItem = cart.find(item => item.productId === productId);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product)
  }
}

function increaseQuantity(productId) {
  const existingCartItem = cart.find(item => item.productId === productId);
  if (existingCartItem) {
    existingCartItem.quantity += 1;
  }
}


function removeProductFromCart(productId) {
  const existingCartItemIndex = cart.findIndex(item => item.productId === productId);

  if (existingCartItemIndex !== -1) {
    cart[existingCartItemIndex].quantity = 0;
    cart.splice(existingCartItemIndex, 1);
  }
}

function decreaseQuantity(productId) {
  const existingCartItemIndex = cart.findIndex(item => item.productId === productId);

  if (existingCartItemIndex !== -1) {
    cart[existingCartItemIndex].quantity -= 1;

    if (cart[existingCartItemIndex].quantity <= 0) {
      cart.splice(existingCartItemIndex, 1);
    }
  }
}


function cartTotal() {
  let total = 0;
  cart.forEach(existingCartItem => {
    let itemTotal = existingCartItem.quantity * existingCartItem.price;
    total += itemTotal;
  });
  return total;
}


function pay(amount) {
  const currentCartTotal = cartTotal();
  if (currentCartTotal !== lastCartTotal) {
    totalPaid = 0;
    lastCartTotal = currentCartTotal;
  }
  totalPaid += amount;
  return totalPaid - currentCartTotal;
}

function emptyCart() {
  cart.length = 0;
}



/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
