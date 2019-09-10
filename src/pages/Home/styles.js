import styled from 'styled-components';
import { darken } from 'polished';
import { MdAddShoppingCart } from 'react-icons/md';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  align-self: center;
  max-width: 240px;
  max-height: 240px;
  margin-bottom: 24px;
`;

export const ProductName = styled.h2`
  font-size: 14px;
  font-weight: normal;
`;

export const ProductPrice = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #ff3838;
  color: #fff;
  overflow: hidden;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#ff3838')};
  }

  &:active {
    background-color: ${darken(0.15, '#ff3838')};
  }
`;

export const ButtonIcon = styled(MdAddShoppingCart).attrs({
  size: 20,
  color: '#fff',
})`
  margin-right: 8px;
`;

export const ButtonText = styled.span`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
`;
