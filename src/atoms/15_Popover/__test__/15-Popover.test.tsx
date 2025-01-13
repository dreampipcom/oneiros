// @atoms/15_Popover/__test__/15-Popover.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Popover from '../Popover';

describe('Popover component', () => {
  it('Popover should render correctly', () => {
    const result = render(
      <Popover open id="test-review" href="https://dreampip.com" />,
    );
    const component = result.container.querySelector('#test-review');
    expect(component).toBeInTheDocument();
  });
});
