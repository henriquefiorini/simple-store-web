import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdClose,
} from 'react-icons/md';

import { Page } from '../../components';

import {
  ProductTable,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Quantity,
  QuantityInput,
  QuantityButton,
  RemoveButton,
  Total,
  TotalText,
  OrderButton,
} from './styles';

import { formatCurrency } from '../../util/format';

import {
  updateQuantityRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatCurrency(product.price * product.quantity),
    }))
  );

  const orderValue = useSelector(state =>
    formatCurrency(
      state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0)
    )
  );

  function increaseQuantity(product) {
    dispatch(updateQuantityRequest(product.id, product.quantity + 1));
  }

  function decreaseQuantity(product) {
    dispatch(updateQuantityRequest(product.id, product.quantity - 1));
  }

  return (
    <Page title="Cart">
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="Product Image" />
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotals</th>
            <th aria-label="Remove Product" />
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.length > 0 &&
            cart.map(product => (
              <tr key={product.id}>
                <td>
                  <ProductImage src={product.image} alt={product.title} />
                </td>
                <td>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </td>
                <td>
                  <Quantity>
                    <QuantityButton onClick={() => decreaseQuantity(product)}>
                      <MdRemoveCircleOutline size={20} />
                    </QuantityButton>
                    <QuantityInput value={product.quantity} />
                    <QuantityButton onClick={() => increaseQuantity(product)}>
                      <MdAddCircleOutline size={20} />
                    </QuantityButton>
                  </Quantity>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <RemoveButton
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    <MdClose size={20} />
                    <span>Remove from cart</span>
                  </RemoveButton>
                </td>
              </tr>
            ))}
        </tbody>
      </ProductTable>
      <Total>
        <TotalText>
          <span>Total:</span> <strong>{orderValue}</strong>
        </TotalText>
        <OrderButton>Order products</OrderButton>
      </Total>
    </Page>
  );
}

export default Cart;
