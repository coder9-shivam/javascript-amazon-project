import { addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption } from "../../data/cart.js"

describe('test suite: cartTests', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
  });

  // Specs for addToCart
  describe('test suite: addToCart', () => {
    it('adds and existig poduct to the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });

      loadFromStorage();

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(2);

      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }]));
    });

    it('adds a new product to the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([]);
      });
      loadFromStorage();

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);

      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]));
    });
  });

  // Specs for removeFromCart
  describe('Test suite: removeFromCart', () => {
    it('remove a product that is in the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });

      loadFromStorage();

      removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(0);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
    });

    it('does nothing if product that is not in the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });
      loadFromStorage();

      removeFromCart('empty-does-not-exist');
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]));
    });
  });

  // Specs for updateDeliveryOptions
  describe('test suite: updateDeliveryOption', () => {
    it('updates the delivery option', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });

      loadFromStorage();

      updateDeliveryOption(
        'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '2'
      );
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
      expect(cart[0].deliveryOptionId).toEqual('2');

      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '2'
      }]));
    });

    it('does nothing if the product is not in the cart', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });

      loadFromStorage();

      updateDeliveryOption('empty-does-not-exist', '2');
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
      expect(cart[0].deliveryOptionId).toEqual('1');

      expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });

    it('does nothing if the delivery option does not exist', () => {
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }]);
      });

      loadFromStorage();

      updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'empty-does-not-exist');
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
      expect(cart[0].deliveryOptionId).toEqual('1');

      expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
  });

});