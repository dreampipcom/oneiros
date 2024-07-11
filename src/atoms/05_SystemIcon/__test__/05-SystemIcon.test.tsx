// @atoms/05_SystemIcon/__test__/05-SystemIcon.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import SystemIcon from '../SystemIcon';

describe('SystemIcon component', () => {
  it('SystemIcon should render correctly', () => {
    const result = render(<SystemIcon id="test-systemIcon" />);
    const component = result.container.querySelector('#test-systemIcon');
    expect(component).toBeInTheDocument();
  });
});
