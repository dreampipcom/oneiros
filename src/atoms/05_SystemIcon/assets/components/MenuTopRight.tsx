/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuTopRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuTopRightProps & React.SVGProps<SVGSVGElement>>;

const MenuTopRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuTopRightProps) {
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
          id="memory-menu-top-right"
          viewBox="0 0 22 22"
        >
          <path d="M15 18H13V17H12V16H11V15H10V14H9V13H8V12H7V11H6V10H5V9H4V7H15V18M13 14V9H8V10H9V11H10V12H11V13H12V14H13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuTopRight;
