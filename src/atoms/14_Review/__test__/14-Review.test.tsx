// @atoms/14_Review/__test__/14-Review.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Review from '../Review';

describe('Review component', () => {
  it('Review should render correctly', () => {
    const result = render(
      <Review id="test-review" href="https://dreampip.com" />,
    );
    const component = result.container.querySelector('#test-review');
    expect(component).toBeInTheDocument();
  });
});
