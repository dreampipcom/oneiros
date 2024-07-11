// @atoms/07_Dropdown/__test__/07-Dropdown.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Dropdown from '../Dropdown';

describe('Dropdown component', () => {
  it('Dropdown should render correctly', () => {
    const result = render(<Dropdown id="test-dropdown" />);
    const component = result.container.querySelector('#test-dropdown');
    expect(component).toBeInTheDocument();
  });
});
