/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowProps & React.SVGProps<SVGSVGElement>>;

const Arrow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowProps) {
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
          id="memory-arrow"
          viewBox="0 0 22 22"
        >
          <path d="M20 2H17V4H16V5H15V6H14V7H13V8H12V9H11V10H10V11H9V12H8V13H7V14H6V15H3V16H2V17H1V18H2V19H3V20H4V21H5V20H6V19H7V16H8V15H9V14H10V13H11V12H12V11H13V10H14V9H15V8H16V7H17V6H18V5H20" />
        </svg>
      </g>
    </svg>
  );
};

export default Arrow;
