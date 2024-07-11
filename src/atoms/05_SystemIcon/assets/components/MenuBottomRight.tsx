/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MenuBottomRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  MenuBottomRightProps & React.SVGProps<SVGSVGElement>
>;

const MenuBottomRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MenuBottomRightProps) {
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
          id="memory-menu-bottom-right"
          viewBox="0 0 22 22"
        >
          <path d="M4 15V13H5V12H6V11H7V10H8V9H9V8H10V7H11V6H12V5H13V4H15V15H4M8 13H13V8H12V9H11V10H10V11H9V12H8V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MenuBottomRight;
