// @atoms/00_Globals/__test__/00-Globals.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Globals from '../Globals';

describe('Globals component', () => {
  it('Globals should render correctly', () => {
    const result = render(<Globals />);
    const globals = result.container.querySelector('#globals-loaded');
    expect(globals).toBeInTheDocument();
  });
});
