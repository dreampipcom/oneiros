/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuDownFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuDownFillProps & React.SVGProps<SVGSVGElement>>;

const MenuDownFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuDownFillProps) {
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
          id="memory-menu-down-fill"
          viewBox="0 0 22 22"
        >
          <path d="M17 9V8H5V9H6V10H7V11H8V12H9V13H10V14H12V13H13V12H14V11H15V10H16V9" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuDownFill;
