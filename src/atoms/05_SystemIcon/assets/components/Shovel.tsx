/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ShovelProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ShovelProps & React.SVGProps<SVGSVGElement>>;

const Shovel: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ShovelProps) {
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
          id="memory-shovel"
          viewBox="0 0 22 22"
        >
          <path d="M5 19H4V18H3V17H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11V9H12V8H10V6H11V5H12V4H13V3H16V4H17V5H18V6H19V9H18V10H17V11H16V12H14V10H13V11H12V12H11V13H10V14H9V15H8V16H7V17H6V18H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Shovel;
