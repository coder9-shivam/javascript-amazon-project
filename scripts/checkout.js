import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import { loadProducts } from "../data/products.js";
// import "../data/cart-class.js";
import "../data/backend-practice.js";

new Promise(() => {
  console.log('promise');
})

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});