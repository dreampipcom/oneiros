// @atoms/03_Card/__test__/03-CalendarView.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import CalendarView from '../CalendarView';

describe('CalendarView component', () => {
  it('CalendarView should render correctly', () => {
    const result = render(<CalendarView id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
