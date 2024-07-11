/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckboxMarkedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckboxMarkedProps & React.SVGProps<SVGSVGElement>>;

const CheckboxMarked: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckboxMarkedProps) {
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
          id="memory-checkbox-marked"
          viewBox="0 0 22 22"
        >
          <path d="M3 4H4V3H18V4H17V5H5V17H17V11H18V10H19V18H18V19H4V18H3V4M6 9H8V10H9V11H10V12H12V11H13V10H14V9H15V8H16V7H17V6H18V5H19V4H21V6H20V7H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H10V14H9V13H8V12H7V11H6V9Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CheckboxMarked;
