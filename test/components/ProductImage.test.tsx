import { create } from 'react-test-renderer';
import React from 'react';
import { ProductCard, ProductImage } from '../../src';

import { product2 } from '../data/products';

describe('Product Image', () => {
  test('must show the component with custom image', () => {

    const wrapper = create(
      <ProductImage img="https://hello.jpg" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('Must show the component with the product image', () => {
    const wrapper = create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
})