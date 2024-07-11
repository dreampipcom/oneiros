/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowLeftUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowLeftUpProps & React.SVGProps<SVGSVGElement>>;

const ArrowLeftUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowLeftUpProps) {
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
          id="memory-arrow-left-up"
          viewBox="0 0 22 22"
        >
          <path d="M10 3H8V4H7V5H6V6H5V7H4V9H6V8H7V7H8V11H9V13H10V14H12V15H19V13H13V12H11V10H10V7H11V8H12V9H14V7H13V6H12V5H11V4H10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowLeftUp;
