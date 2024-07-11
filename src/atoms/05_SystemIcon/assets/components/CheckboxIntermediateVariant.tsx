/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckboxIntermediateVariantProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CheckboxIntermediateVariantProps & React.SVGProps<SVGSVGElement>
>;

const CheckboxIntermediateVariant: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckboxIntermediateVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <g fill={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="memory-checkbox-intermediate-variant"
          viewBox="0 0 22 22"
        >
          <path d="M8 15H7V7H15V8H14V9H13V10H12V11H11V12H10V13H9V14H8M18 19H4V18H3V4H4V3H18V4H19V18H18M17 17V5H5V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CheckboxIntermediateVariant;
