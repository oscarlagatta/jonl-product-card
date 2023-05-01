import { create, act } from 'react-test-renderer';
import React from 'react';
import { ProductCard } from '../../src';

import { product1 } from '../data/products';

describe('Product Card', () => {
  test('must show the component', () => {

    const wrapper = create(
      <ProductCard product={product1} >
        {
          () => (
            <h1>Product Card</h1>
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('Must increment the counter', () => {
    const wrapper = create(
      <ProductCard product={product1} >
        {
          ({count, increaseBy}) => (
            <>
              <h1>Product card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )
        }
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe("1");
  });

})