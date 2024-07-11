// @atoms/04_Logo/__test__/04-Logo.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo component', () => {
  it('Logo should render correctly', () => {
    const result = render(<Logo id="test-logo" />);
    const logo = result.container.querySelector('#test-logo');
    expect(logo).toBeInTheDocument();
  });
});
