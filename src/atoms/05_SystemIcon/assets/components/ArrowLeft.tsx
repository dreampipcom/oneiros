/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowLeftProps & React.SVGProps<SVGSVGElement>>;

const ArrowLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowLeftProps) {
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
          id="memory-arrow-left"
          viewBox="0 0 22 22"
        >
          <path d="M5 12V10H6V9H7V8H8V7H9V6H11V8H10V9H9V10H18V12H9V13H10V14H11V16H9V15H8V14H7V13H6V12" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowLeft;
