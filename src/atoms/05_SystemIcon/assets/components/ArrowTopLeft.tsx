/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowTopLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowTopLeftProps & React.SVGProps<SVGSVGElement>>;

const ArrowTopLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowTopLeftProps) {
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
          id="memory-arrow-top-left"
          viewBox="0 0 22 22"
        >
          <path d="M5 14V5H14V7H9V8H10V9H11V10H12V11H13V12H14V13H15L15 14H16V15H15V16H14L14 15H13V14H12V13H11V12H10V11H9V10H8V9H7V14H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowTopLeft;
