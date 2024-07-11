/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowRightProps & React.SVGProps<SVGSVGElement>>;

const ArrowRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowRightProps) {
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
          id="memory-arrow-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 10V12H16V13H15V14H14V15H13V16H11V14H12V13H13V12H4V10H13V9H12V8H11V6H13V7H14V8H15V9H16V10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowRight;
