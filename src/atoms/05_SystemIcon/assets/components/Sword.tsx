/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SwordProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SwordProps & React.SVGProps<SVGSVGElement>>;

const Sword: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SwordProps) {
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
          id="memory-sword"
          viewBox="0 0 22 22"
        >
          <path d="M5 20H3V19H2V17H3V16H4V15H5V14H4V13H3V11H5V12H6V11H7V10H8V9H9V8H10V7H11V6H12V5H13V4H14V3H15V2H20V7H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H11V16H10V17H11V19H9V18H8V17H7V18H6V19H5M10 13V12H11V11H12V10H13V9H14V8H15V7H16V6H17V5H18V4H16V5H15V6H14V7H13V8H12V9H11V10H10V11H9V12H8V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Sword;
