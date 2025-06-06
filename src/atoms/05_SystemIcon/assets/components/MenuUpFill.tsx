/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/menu-up-fill
import React from 'react';

interface MenuUpFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuUpFillProps & React.SVGProps<SVGSVGElement>>;

const MenuUpFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuUpFillProps) {
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
          id="memory-menu-up-fill"
          viewBox="0 0 22 22"
        >
          <path d="M5 13V14H17V13H16V12H15V11H14V10H13V9H12V8H10V9H9V10H8V11H7V12H6V13" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuUpFill;
