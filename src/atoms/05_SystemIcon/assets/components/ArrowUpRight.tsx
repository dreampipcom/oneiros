/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowUpRightProps & React.SVGProps<SVGSVGElement>>;

const ArrowUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowUpRightProps) {
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
          id="memory-arrow-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M19 10V8H18V7H17V6H16V5H15V4H13V6H14V7H15V8H11V9H9V10H8V12H7V19H9V13H10V11H12V10H15V11H14V12H13V14H15V13H16V12H17V11H18V10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowUpRight;
