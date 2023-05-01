import { create } from 'react-test-renderer';
import React from 'react';
import { ProductTitle, ProductCard } from '../../src';

import { product1 } from '../data/products';

describe('Product Title', () => {
  test('must show the component with the custom title', () => {

    const wrapper = create(
      <ProductTitle title="Custom Product" className="custom-classu"/>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('Must show the component with the product name', () => {
    const wrapper = create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Must show the component with the product name', () => {
    const wrapper = create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });


})