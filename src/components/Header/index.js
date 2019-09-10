import React from 'react';
import { connect } from 'react-redux';

import { Container, Logo, Cart, CartIcon, CartText } from './styles';

function Header({ cartCount }) {
  return (
    <Container>
      <Logo to="/">Simple Store</Logo>
      <Cart to="/cart">
        <CartText>
          <strong>My cart</strong>
          <span>{cartCount === 0 ? 'Empty cart' : `${cartCount} itens`}</span>
        </CartText>
        <CartIcon />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartCount: state.cart.length,
}))(Header);
