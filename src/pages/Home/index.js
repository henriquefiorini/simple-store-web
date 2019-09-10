import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Page } from '../../components';

import {
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  ButtonIcon,
  ButtonText,
} from './styles';

import api from '../../services/api';

import { formatCurrency } from '../../util/format';

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
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
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
                  <ButtonText>Add to cart</ButtonText>
                </AddToCartButton>
              </Product>
            ))}
        </ProductList>
      </Page>
    );
  }
}

export default connect()(Home);
