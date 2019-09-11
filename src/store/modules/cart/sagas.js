import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  ADD_TO_CART_REQUEST,
  UPDATE_CART_QUANTITY_REQUEST,
} from './actionTypes';
import { addToCartSuccess, updateQuantitySuccess } from './actions';

import { Api, History } from '../../../services';

import { formatCurrency } from '../../../util/format';

function* addToCart({ id }) {
  const product = yield select(state => state.cart.find(p => p.id === id));
  const stock = yield call(Api.get, `/stock/${id}`);

  const stockQuantity = stock.data.quantity;
  const selectedQuantity = product ? product.quantity : 0;
  const quantity = selectedQuantity + 1;

  if (quantity > stockQuantity) {
    toast.error(`Sorry, there are only ${stockQuantity} units in stock!`);
    return;
  }

  if (product) {
    yield put(updateQuantitySuccess(id, quantity));
  } else {
    const { data } = yield call(Api.get, `/products/${id}`);
    const newProduct = {
      ...data,
      quantity: 1,
      priceFormatted: formatCurrency(data.price),
    };

    yield put(addToCartSuccess(newProduct));
    History.push('/cart');
  }
}

function* updateQuantity({ id, quantity }) {
  if (quantity <= 0) return;

  const stock = yield call(Api.get, `/stock/${id}`);
  const stockQuantity = stock.data.quantity;
  if (quantity > stockQuantity) {
    toast.error(`Sorry, there are only ${stockQuantity} units in stock!`);
    return;
  }

  yield put(updateQuantitySuccess(id, quantity));
}

export default all([
  takeLatest(ADD_TO_CART_REQUEST, addToCart),
  takeLatest(UPDATE_CART_QUANTITY_REQUEST, updateQuantity),
]);
