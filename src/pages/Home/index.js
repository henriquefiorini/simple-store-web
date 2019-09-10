import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Page } from '../../components';

import {
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductQuantity,
  AddToCartButton,
  ButtonIcon,
  ButtonText,
} from './styles';

import api from '../../services/api';

import { formatCurrency } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const products = response.data.map(product => ({
      ...product,
      priceFormatted: formatCurrency(product.price),
    }));
    this.setState({ products });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;
    addToCart(product);
  };

  render() {
    const { quantity } = this.props;
    const { products } = this.state;

    return (
      <Page title="Offers">
        <ProductList>
          {products &&
            products.length > 0 &&
            products.map(product => (
              <Product key={product.id}>
                <ProductImage src={product.image} alt={product.title} />
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
                <AddToCartButton onClick={() => this.handleAddProduct(product)}>
                  <ButtonIcon />
                  <ButtonText>
                    Add to cart
                    {quantity[product.id] && ` (${quantity[product.id]})`}
                  </ButtonText>
                </AddToCartButton>
              </Product>
            ))}
        </ProductList>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  quantity: state.cart.reduce((quantity, product) => {
    quantity[product.id] = product.quantity;
    return quantity;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
