/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MenuUpProps & React.SVGProps<SVGSVGElement>>;

const MenuUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuUpProps) {
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
          id="memory-menu-up"
          viewBox="0 0 22 22"
        >
          <path d="M18 14H4V12H5V11H6V10H7V9H8V8H9V7H10V6H12V7H13V8H14V9H15V10H16V11H17V12H18V14M14 12V11H13V10H12V9H10V10H9V11H8V12H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuUp;
