/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckboxBlankProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckboxBlankProps & React.SVGProps<SVGSVGElement>>;

const CheckboxBlank: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckboxBlankProps) {
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
          id="memory-checkbox-blank"
          viewBox="0 0 22 22"
        >
          <path d="M3 4H4V3H18V4H19V18H18V19H4V18H3V4M5 17H17V5H5V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CheckboxBlank;
