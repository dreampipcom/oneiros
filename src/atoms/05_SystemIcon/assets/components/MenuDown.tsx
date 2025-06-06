/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/menu-down
import React from 'react';

interface MenuDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuDownProps & React.SVGProps<SVGSVGElement>>;

const MenuDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuDownProps) {
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
          id="memory-menu-down"
          viewBox="0 0 22 22"
        >
          <path d="M4 8H18V10H17V11H16V12H15V13H14V14H13V15H12V16H10V15H9V14H8V13H7V12H6V11H5V10H4V8M8 10V11H9V12H10V13H12V12H13V11H14V10H8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuDown;
