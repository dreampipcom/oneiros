// @atoms/03_Link/__test__/03-Link.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Link from '../Link';

describe('Link component', () => {
  it('Link should render correctly', () => {
    const result = render(<Link id="test-link" href="https://dreampip.com" />);
    const link = result.container.querySelector('#test-link');
    expect(link).toBeInTheDocument();
  });
});
