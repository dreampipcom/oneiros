/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuLeftFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuLeftFillProps & React.SVGProps<SVGSVGElement>>;

const MenuLeftFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuLeftFillProps) {
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
          id="memory-menu-left-fill"
          viewBox="0 0 22 22"
        >
          <path d="M13 17H14V5H13V6H12V7H11V8H10V9H9V10H8V12H9V13H10V14H11V15H12V16H13" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuLeftFill;
