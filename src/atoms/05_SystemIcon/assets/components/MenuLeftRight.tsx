/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuLeftRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuLeftRightProps & React.SVGProps<SVGSVGElement>>;

const MenuLeftRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuLeftRightProps) {
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
          id="memory-menu-left-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 4H14V5H15V6H16V7H17V8H18V9H19V10H20V12H19V13H18V14H17V15H16V16H15V17H14V18H12V4M10 4V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H3V9H4V8H5V7H6V6H7V5H8V4H10M14 8V14H15V13H16V12H17V10H16V9H15V8H14M8 8H7V9H6V10H5V12H6V13H7V14H8V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuLeftRight;
