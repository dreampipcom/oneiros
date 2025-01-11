// @atoms/06_Nav/__test__/06-Nav.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Nav from '../Nav';

describe('Nav component', () => {
  it('Nav should render correctly', () => {
    const result = render(<Nav id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
