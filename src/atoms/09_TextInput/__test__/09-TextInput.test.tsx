// @atoms/09_TextInput/__test__/09-TextInput.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import TextInput from '../TextInput';

describe('TextInput component', () => {
  it('TextInput should render correctly', () => {
    const result = render(<TextInput id="test-text-input" />);
    const component = result.container.querySelector('#test-text-input');
    expect(component).toBeInTheDocument();
  });
});
