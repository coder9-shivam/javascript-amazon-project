export const cart = [];

export function addToCart(productId) {
  // If the item is same just increase the quantity and push the code in cart.
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }
}