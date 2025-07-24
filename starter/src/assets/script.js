const products = [
  {
    name: "cherry",
    price: .70,
    quantity: 0,
    productId: 1,
    image: "./images/cherry.jpg"
  },
  {
    name: "orange",
    price: .60,
    quantity: 0,
    productId: 2,
    image: "./images/orange.jpg"
  },
  {
    name: "strawberry",
    price: .50,
    quantity: 0,
    productId: 3,
    image: "./images/strawberry.jpg"
  },
];

let cart = [];
let totalPaid = 0;
let lastCartTotal = 0;

// Finds and returns a product from the products array by its ID
function getProductById(productId) {
  return products.find(item => item.productId === productId);
}

// Adds a product to the cart or increases its quantity if already present
function addProductToCart(productId) {
  const product = getProductById(productId);
  const existingCartItem = cart.find(item => item.productId === productId);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product)
  }
}

// Increases the quantity of an existing item in the cart
function increaseQuantity(productId) {
  const existingCartItem = cart.find(item => item.productId === productId);
  if (existingCartItem) {
    existingCartItem.quantity += 1;
  }
}

// Removes a product completely from the cart
function removeProductFromCart(productId) {
  const existingCartItemIndex = cart.findIndex(item => item.productId === productId);

  if (existingCartItemIndex !== -1) {
    cart[existingCartItemIndex].quantity = 0;
    cart.splice(existingCartItemIndex, 1);
  }
}

// Decreases the quantity of an item in the cart, removing it if quantity reaches 0
function decreaseQuantity(productId) {
  const existingCartItemIndex = cart.findIndex(item => item.productId === productId);

  if (existingCartItemIndex !== -1) {
    cart[existingCartItemIndex].quantity -= 1;

    if (cart[existingCartItemIndex].quantity <= 0) {
      cart.splice(existingCartItemIndex, 1);
    }
  }
}

// Calculates and returns the total price of all items in the cart
function cartTotal() {
  let total = 0;
  cart.forEach(existingCartItem => {
    let itemTotal = existingCartItem.quantity * existingCartItem.price;
    total += itemTotal;
  });
  return total;
}

// Processes payment and returns change, empties cart when fully paid
function pay(amount) {
  totalPaid += amount;
  const remainingBalance = totalPaid - cartTotal();

  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }

  return remainingBalance;
}

// Clears all items from the cart
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
