/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuLeftProps & React.SVGProps<SVGSVGElement>>;

const MenuLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuLeftProps) {
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
          id="memory-menu-left"
          viewBox="0 0 22 22"
        >
          <path d="M15 4V18H13V17H12V16H11V15H10V14H9V13H8V12H7V10H8V9H9V8H10V7H11V6H12V5H13V4H15M13 8H12V9H11V10H10V12H11V13H12V14H13V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuLeft;
