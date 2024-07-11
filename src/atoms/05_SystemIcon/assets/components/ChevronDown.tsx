/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChevronDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChevronDownProps & React.SVGProps<SVGSVGElement>>;

const ChevronDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChevronDownProps) {
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
          id="memory-chevron-down"
          viewBox="0 0 22 22"
        >
          <path d="M16 10H17V9H18V7H16V8H15V9H14V10H13V11H12V12H10V11H9V10H8V9H7V8H6V7H4V9H5V10H6V11H7V12H8V13H9V14H10V15H12V14H13V13H14V12H15V11H16" />
        </svg>
      </g>
    </svg>
  );
};

export default ChevronDown;
