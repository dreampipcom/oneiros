/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowUpLeftProps & React.SVGProps<SVGSVGElement>>;

const ArrowUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowUpLeftProps) {
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
          id="memory-arrow-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M3 10V8H4V7H5V6H6V5H7V4H9V6H8V7H7V8H11V9H13V10H14V12H15V19H13V13H12V11H10V10H7V11H8V12H9V14H7V13H6V12H5V11H4V10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowUpLeft;
