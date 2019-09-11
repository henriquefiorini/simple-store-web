import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

import * as CartActions from '../../store/modules/cart/actions';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        priceFormatted: PropTypes.string,
        subtotal: PropTypes.string,
      })
    ).isRequired,
    orderValue: PropTypes.string.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  };

  increaseQuantity = product => {
    const { updateQuantity } = this.props;
    updateQuantity(product.id, product.quantity + 1);
  };

  decreaseQuantity = product => {
    const { updateQuantity } = this.props;
    updateQuantity(product.id, product.quantity - 1);
  };

  render() {
    const { cart, orderValue, removeFromCart } = this.props;
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
                      <QuantityButton
                        onClick={() => this.decreaseQuantity(product)}
                      >
                        <MdRemoveCircleOutline size={20} />
                      </QuantityButton>
                      <QuantityInput value={product.quantity} />
                      <QuantityButton
                        onClick={() => this.increaseQuantity(product)}
                      >
                        <MdAddCircleOutline size={20} />
                      </QuantityButton>
                    </Quantity>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <RemoveButton onClick={() => removeFromCart(product.id)}>
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
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatCurrency(product.price * product.quantity),
  })),
  orderValue: formatCurrency(
    state.cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
