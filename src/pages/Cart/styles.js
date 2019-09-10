import styled from 'styled-components';
import { darken } from 'polished';

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    padding: 16px;
    color: #666;
    text-align: left;
  }

  tbody td {
    padding: 16px;
    border-top: 1px solid #eee;
    text-align: left;
    vertical-align: middle;
  }
`;

export const ProductImage = styled.img`
  height: 80px;
`;

export const ProductName = styled.h2`
  display: block;
  font-size: 13px;
  font-weight: normal;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityInput = styled.input.attrs({
  type: 'text',
  readOnly: true,
})`
  width: 48px;
  margin: 0 8px;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  text-align: center;
`;

export const QuantityButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7158e2;
  line-height: 1;
`;

export const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  color: #ff3838;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1;

  span {
    margin-left: 4px;
  }
`;

export const Total = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid #eee;
`;

export const TotalText = styled.h2`
  font-size: 18px;
  font-weight: normal;
`;

export const OrderButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #ff3838;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
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
