// @atoms/01_Card/__test__/01-CardGrid.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import CardGrid from '../CardGrid';

describe('CardGrid component', () => {
  it('CardGrid should render correctly', () => {
    const result = render(<CardGrid id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
