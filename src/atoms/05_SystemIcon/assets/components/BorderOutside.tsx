/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderOutsideProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderOutsideProps & React.SVGProps<SVGSVGElement>>;

const BorderOutside: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderOutsideProps) {
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
          id="memory-border-outside"
          viewBox="0 0 22 22"
        >
          <path d="M2 2H20V20H2V2M4 4V18H18V4H4M10 6H12V8H10V6M10 10H12V12H10V10M6 10H8V12H6V10M14 10H16V12H14V10M10 14H12V16H10V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderOutside;
