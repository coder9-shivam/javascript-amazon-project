import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch();

    await loadCartFetch();

  } catch (error) {
    console.log('Unexpected error, Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();