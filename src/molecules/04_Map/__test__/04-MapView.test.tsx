// @atoms/04_Card/__test__/04-MapView.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import MapView from '../MapView';

describe('MapView component', () => {
  it('MapView should render correctly', () => {
    const result = render(<MapView id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
