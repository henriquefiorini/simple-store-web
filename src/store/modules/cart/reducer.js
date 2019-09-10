import produce from 'immer';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from './actionTypes';

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return produce(state, draft => {
        const { product } = action;

        const productIndex = draft.findIndex(p => p.id === product.id);
        if (productIndex >= 0) {
          draft[productIndex].quantity += 1;
        } else {
          draft.push({
            ...product,
            quantity: 1,
          });
        }
      });

    case REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case UPDATE_CART_QUANTITY: {
      if (action.quantity <= 0) {
        return state;
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].quantity = Number(action.quantity);
        }
      });
    }

    default:
      return state;
  }
}

export default cartReducer;
