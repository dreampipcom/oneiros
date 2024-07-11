/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuRightProps & React.SVGProps<SVGSVGElement>>;

const MenuRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuRightProps) {
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
          id="memory-menu-right"
          viewBox="0 0 22 22"
        >
          <path d="M7 18V4H9V5H10V6H11V7H12V8H13V9H14V10H15V12H14V13H13V14H12V15H11V16H10V17H9V18H7M9 14H10V13H11V12H12V10H11V9H10V8H9V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuRight;
