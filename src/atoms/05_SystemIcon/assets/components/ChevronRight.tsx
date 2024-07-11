/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChevronRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChevronRightProps & React.SVGProps<SVGSVGElement>>;

const ChevronRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChevronRightProps) {
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
          id="memory-chevron-right"
          viewBox="0 0 22 22"
        >
          <path d="M10 6V5H9V4H7V6H8V7H9V8H10V9H11V10H12V12H11V13H10V14H9V15H8V16H7V18H9V17H10V16H11V15H12V14H13V13H14V12H15V10H14V9H13V8H12V7H11V6" />
        </svg>
      </g>
    </svg>
  );
};

export default ChevronRight;
