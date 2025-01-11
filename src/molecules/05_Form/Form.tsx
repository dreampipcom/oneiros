/* eslint   no-unreachable:0, @typescript-eslint/no-unused-vars:0, no-import-assign:0, import/no-unresolved:0, import/no-webpack-loader-syntax:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @molecule/Form.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import clsx from 'clsx';
import React from 'react';
import { Typography } from '../../atoms/02_Typography';
import { DreamPipColors } from '../../../dist/esm/tailwind.config.ts';

const DEFAULT_FIELDS = [];

export enum EFormVariant {
  DEFAULT = 'default',
}

export interface IForm {
  id?: string;
  className?: string;
  fields?: Record<string, any>[];
  locale?: string;
  onSubmit?: () => void;
  onValidate?: () => void;
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export const HForm = function ({
  id = 'molecule__Form',
  className = '',
  fields = DEFAULT_FIELDS,
  locale,
  onSubmit,
  onValidate,
  fetchNewData,
  theme = 'light',
}: IForm) {
  return (
    <div id={id} className="relative">
      <Typography>This is a form.</Typography>
      {fields}
    </div>
  );
};

export default HForm;
