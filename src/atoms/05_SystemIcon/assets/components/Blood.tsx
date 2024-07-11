/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BloodProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BloodProps & React.SVGProps<SVGSVGElement>>;

const Blood: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BloodProps) {
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
          id="memory-blood"
          viewBox="0 0 22 22"
        >
          <path d="M5,16H6V14H5ZM6,17H7V16H6ZM14,21H8V20H6V19H5V18H4V16H3V13H4V12H5V10H6V9H7V7H8V5H9V3H10V1H12V3H13V5H14V7H15V9H16V10H17V12H18V13H19V16H18V18H17V19H16V20H14ZM9,18V17H7V18ZM12,19V18H9V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Blood;
