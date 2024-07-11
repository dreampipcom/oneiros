/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowDownLeftProps & React.SVGProps<SVGSVGElement>>;

const ArrowDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowDownLeftProps) {
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
          id="memory-arrow-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M3 12V14H4V15H5V16H6V17H7V18H9V16H8V15H7V14H11V13H13V12H14V10H15V3H13V9H12V11H10V12H7V11H8V10H9V8H7V9H6V10H5V11H4V12" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowDownLeft;
