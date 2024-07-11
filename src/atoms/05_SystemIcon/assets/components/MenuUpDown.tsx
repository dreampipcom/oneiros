/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuUpDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuUpDownProps & React.SVGProps<SVGSVGElement>>;

const MenuUpDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuUpDownProps) {
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
          id="memory-menu-up-down"
          viewBox="0 0 22 22"
        >
          <path d="M4 10V8H5V7H6V6H7V5H8V4H9V3H10V2H12V3H13V4H14V5H15V6H16V7H17V8H18V10H4M4 12H18V14H17V15H16V16H15V17H14V18H13V19H12V20H10V19H9V18H8V17H7V16H6V15H5V14H4V12M8 8H14V7H13V6H12V5H10V6H9V7H8V8M8 14V15H9V16H10V17H12V16H13V15H14V14H8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuUpDown;
