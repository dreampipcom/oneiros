/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowLeftDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowLeftDownProps & React.SVGProps<SVGSVGElement>>;

const ArrowLeftDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowLeftDownProps) {
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
          id="memory-arrow-left-down"
          viewBox="0 0 22 22"
        >
          <path d="M10 19H8V18H7V17H6V16H5V15H4V13H6V14H7V15H8V11H9V9H10V8H12V7H19V9H13V10H11V12H10V15H11V14H12V13H14V15H13V16H12V17H11V18H10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowLeftDown;
