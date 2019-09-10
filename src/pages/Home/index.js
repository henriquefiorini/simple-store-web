import React from 'react';

import { Page } from '../../components';

import {
  ProductList,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCartButton,
  ButtonIcon,
  ButtonText,
} from './styles';

export default function Home() {
  return (
    <Page title="Offers">
      <ProductList>
        <Product>
          <ProductImage src="https://www.betterthanpants.com/media/catalog/product/i/-/i-know-html-funny-nerd-tshirt-3p_1.jpg" />
          <ProductName>Product name</ProductName>
          <ProductPrice>Price</ProductPrice>
          <AddToCartButton>
            <ButtonIcon />
            <ButtonText>Add to cart</ButtonText>
          </AddToCartButton>
        </Product>
      </ProductList>
    </Page>
  );
}
