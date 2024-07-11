// @atoms/06_PriceTag/__test__/06-PriceTag.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import PriceTag from '../PriceTag';

describe('PriceTag component', () => {
  it('PriceTag should render correctly', () => {
    const result = render(
      <PriceTag id="test-priceTag" href="https://dreampip.com" />,
    );
    const component = result.container.querySelector('#test-priceTag');
    expect(component).toBeInTheDocument();
  });
});
