/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuRightFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuRightFillProps & React.SVGProps<SVGSVGElement>>;

const MenuRightFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuRightFillProps) {
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
          id="memory-menu-right-fill"
          viewBox="0 0 22 22"
        >
          <path d="M9 5H8V17H9V16H10V15H11V14H12V13H13V12H14V10H13V9H12V8H11V7H10V6H9" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuRightFill;
