// @atoms/02_Typography/__test__/02-Typography.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Typography from '../Typography';

describe('Typography component', () => {
  it('Typography should render correctly', () => {
    const result = render(<Typography id="test-typography" />);
    const typography = result.container.querySelector('#test-typography');
    expect(typography).toBeInTheDocument();
  });
});
