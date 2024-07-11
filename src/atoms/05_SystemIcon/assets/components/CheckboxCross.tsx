/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckboxCrossProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckboxCrossProps & React.SVGProps<SVGSVGElement>>;

const CheckboxCross: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckboxCrossProps) {
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
          id="memory-checkbox-cross"
          viewBox="0 0 22 22"
        >
          <path d="M13 12H14V13H15V15H13V14H12V13H10V14H9V15H7V13H8V12H9V10H8V9H7V7H9V8H10V9H12V8H13V7H15V9H14V10H13V12M18 19H4V18H3V4H4V3H18V4H19V18H18V19M5 5V17H17V5H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CheckboxCross;
