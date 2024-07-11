/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SpearProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SpearProps & React.SVGProps<SVGSVGElement>>;

const Spear: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SpearProps) {
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
          id="memory-spear"
          viewBox="0 0 22 22"
        >
          <path d="M5 19H4V18H3V17H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11V9H12V8H13V7H12V5H14V4H16V3H19V6H18V8H17V10H15V9H14V10H13V11H12V12H11V13H10V14H9V15H8V16H7V17H6V18H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Spear;
