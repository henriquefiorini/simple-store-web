import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled(Link)`
  color: #333;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0.5;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  color: #333;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 1.4;
  text-align: right;
`;

export const CartIcon = styled(MdShoppingBasket).attrs({
  size: 32,
  color: '#333',
})`
  flex-shrink: 0;
  margin-left: 8px;
`;
