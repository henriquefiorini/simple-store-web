import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
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

import { Api } from '../../services';

import { formatCurrency } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  static propTypes = {
    quantity: PropTypes.objectOf(PropTypes.number).isRequired,
    addToCartRequest: PropTypes.func.isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await Api.get('/products');
    const products = response.data.map(product => ({
      ...product,
      priceFormatted: formatCurrency(product.price),
    }));
    this.setState({ products });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
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
                <AddToCartButton
                  onClick={() => this.handleAddProduct(product.id)}
                >
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
