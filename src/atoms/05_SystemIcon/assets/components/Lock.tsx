/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LockProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LockProps & React.SVGProps<SVGSVGElement>>;

const Lock: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LockProps) {
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
          id="memory-lock"
          viewBox="0 0 22 22"
        >
          <path d="M10 12H12V13H13V15H12V16H10V15H9V13H10V12M8 2H14V3H15V4H16V8H17V9H18V19H17V20H5V19H4V9H5V8H6V4H7V3H8V2M9 4V5H8V8H14V5H13V4H9M16 10H6V18H16V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Lock;
