// @atoms/02_Card/__test__/02-AudioPlayer.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import AudioPlayer from '../AudioPlayer';

describe('AudioPlayer component', () => {
  it('AudioPlayer should render correctly', () => {
    const result = render(<AudioPlayer id="grid-atom--test" />);
    const component = result.container.querySelector('#grid-atom--test');
    expect(component).toBeInTheDocument();
  });
});
