// @atoms/00_Card/__test__/00-Card.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card component', () => {
  it('Card should render correctly', () => {
    const result = render(<Card id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
