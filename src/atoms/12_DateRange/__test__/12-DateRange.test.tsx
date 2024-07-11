// @atoms/12_DateRange/__test__/12-DateRange.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import DateRange from '../DateRange';

describe('DateRange component', () => {
  it('DateRange should render correctly', () => {
    const result = render(<DateRange id="test-dropdown" />);
    const component = result.container.querySelector('#test-dropdown');
    expect(component).toBeInTheDocument();
  });
});
