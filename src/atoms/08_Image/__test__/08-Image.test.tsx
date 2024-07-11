// @atoms/08_Image/__test__/08-Image.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Image from '../Image';

describe('Image component', () => {
  it('Image should render correctly', () => {
    const result = render(<Image id="test-dropdown" />);
    const component = result.container.querySelector('#test-dropdown');
    expect(component).toBeInTheDocument();
  });
});
