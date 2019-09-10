import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdClose,
} from 'react-icons/md';

import { Page } from '../../components';

import {
  ProductTable,
  ProductImage,
  ProductName,
  ProductPrice,
  Quantity,
  QuantityInput,
  QuantityButton,
  RemoveButton,
  Total,
  TotalText,
  OrderButton,
} from './styles';

export default function Cart() {
  return (
    <Page title="Cart">
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotals</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ProductImage src="https://www.betterthanpants.com/media/catalog/product/i/-/i-know-html-funny-nerd-tshirt-3p_1.jpg" />
            </td>
            <td>
              <ProductName>Product Name</ProductName>
              <ProductPrice>USD 10.00</ProductPrice>
            </td>
            <td>
              <Quantity>
                <QuantityButton>
                  <MdRemoveCircleOutline size={20} />
                </QuantityButton>
                <QuantityInput value={2} />
                <QuantityButton>
                  <MdAddCircleOutline size={20} />
                </QuantityButton>
              </Quantity>
            </td>
            <td>
              <strong>USD 20.00</strong>
            </td>
            <td>
              <RemoveButton>
                <MdClose size={20} />
                <span>Remove from cart</span>
              </RemoveButton>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <Total>
        <TotalText>
          <span>Total:</span> <strong>USD 20.00</strong>
        </TotalText>
        <OrderButton>Order products</OrderButton>
      </Total>
    </Page>
  );
}
