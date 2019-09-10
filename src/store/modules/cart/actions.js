import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from './actionTypes';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
}

export function updateQuantity(id, quantity) {
  return {
    type: UPDATE_CART_QUANTITY,
    id,
    quantity,
  };
}
