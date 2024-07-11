/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowUpProps & React.SVGProps<SVGSVGElement>>;

const ArrowUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowUpProps) {
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
          id="memory-arrow-up"
          viewBox="0 0 22 22"
        >
          <path d="M10 5H12V6H13V7H14V8H15V9H16V11H14V10H13V9H12V18H10V9H9V10H8V11H6V9H7V8H8V7H9V6H10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowUp;
