import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { addToCartRequest } from '../../store/modules/cart/actions';

function Home() {
  const [products, setProducts] = useState([]);

  const quantity = useSelector(state =>
    state.cart.reduce((sum, product) => {
      sum[product.id] = product.quantity;
      return sum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await Api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatCurrency(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

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
              <AddToCartButton onClick={() => handleAddProduct(product.id)}>
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

export default Home;
