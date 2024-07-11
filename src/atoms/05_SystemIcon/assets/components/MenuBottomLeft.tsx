/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuBottomLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuBottomLeftProps & React.SVGProps<SVGSVGElement>>;

const MenuBottomLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuBottomLeftProps) {
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
          id="memory-menu-bottom-left"
          viewBox="0 0 22 22"
        >
          <path d="M7 4H9V5H10V6H11V7H12V8H13V9H14V10H15V11H16V12H17V13H18V15H7V4M9 8V13H14V12H13V11H12V10H11V9H10V8H9Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuBottomLeft;
