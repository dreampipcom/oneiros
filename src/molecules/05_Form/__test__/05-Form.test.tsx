// @atoms/05_Form/__test__/05-Form.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
  it('Form should render correctly', () => {
    const result = render(<Form id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
