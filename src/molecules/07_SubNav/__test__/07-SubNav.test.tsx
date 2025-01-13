// @atoms/07_SubNav/__test__/07-SubNav.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import SubNav from '../SubNav';

describe('SubNav component', () => {
  it('SubNav should render correctly', () => {
    const result = render(<SubNav id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
