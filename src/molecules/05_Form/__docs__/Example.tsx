// @atoms/05_Form/__test__/Example.tsx
import React, { FC } from 'react';
import Form, { IForm } from '../Form.tsx';

const Example: FC<IForm> = function ({ theme = 'light', cards, mapBoxToken }) {
  return <Form cards={cards} theme={theme} mapBoxToken={mapBoxToken} />;
};

export default Example;
