// @atoms/13_BadgeChip/__test__/13-BadgeChip.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import BadgeChip from '../BadgeChip';

describe('BadgeChip component', () => {
  it('BadgeChip should render correctly', () => {
    const result = render(
      <BadgeChip id="test-badgeChip" href="https://dreampip.com" />,
    );
    const component = result.container.querySelector('#test-badgeChip');
    expect(component).toBeInTheDocument();
  });
});
