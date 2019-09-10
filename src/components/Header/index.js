import React from 'react';

import { Container, Logo, Cart, CartIcon, CartText } from './styles';

function Header() {
  return (
    <Container>
      <Logo to="/">Simple Store</Logo>
      <Cart to="/cart">
        <CartText>
          <strong>My cart</strong>
          <span>3 itens</span>
        </CartText>
        <CartIcon />
      </Cart>
    </Container>
  );
}

export default Header;
