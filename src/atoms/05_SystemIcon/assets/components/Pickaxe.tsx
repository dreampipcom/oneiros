/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PickaxeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PickaxeProps & React.SVGProps<SVGSVGElement>>;

const Pickaxe: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PickaxeProps) {
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
          id="memory-pickaxe"
          viewBox="0 0 22 22"
        >
          <path d="M8 2H11V3H13V4H15V5H17V7H18V9H19V11H20V14H18V12H17V11H16V10H14V9H13V8H12V6H11V5H10V4H8M11 9H12V10H13V11H12V12H11V13H10V14H9V15H8V16H7V17H6V18H5V19H4V20H3V21H2V20H1V19H2V18H3V17H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11" />
        </svg>
      </g>
    </svg>
  );
};

export default Pickaxe;
