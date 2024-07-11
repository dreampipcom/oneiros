/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChevronLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChevronLeftProps & React.SVGProps<SVGSVGElement>>;

const ChevronLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChevronLeftProps) {
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
          id="memory-chevron-left"
          viewBox="0 0 22 22"
        >
          <path d="M12 16V17H13V18H15V16H14V15H13V14H12V13H11V12H10V10H11V9H12V8H13V7H14V6H15V4H13V5H12V6H11V7H10V8H9V9H8V10H7V12H8V13H9V14H10V15H11V16" />
        </svg>
      </g>
    </svg>
  );
};

export default ChevronLeft;
