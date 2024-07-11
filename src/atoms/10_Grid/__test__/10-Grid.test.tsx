// @atoms/10_Grid/__test__/10-Grid.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Grid from '../Grid';

describe('Grid component', () => {
  it('Grid should render correctly', () => {
    const result = render(<Grid id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
