import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  cartCount: PropTypes.number,
};

Header.defaultProps = {
  cartCount: 0,
};

const mapStateToProps = state => ({
  cartCount: state.cart.length,
});

export default connect(mapStateToProps)(Header);
