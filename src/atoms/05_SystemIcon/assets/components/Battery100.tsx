/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/battery-100
import React from 'react';

interface Battery100Props {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<Battery100Props & React.SVGProps<SVGSVGElement>>;

const Battery100: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: Battery100Props) {
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
          id="memory-battery-100"
          viewBox="0 0 22 22"
        >
          <path d="M5 8H7V14H5V8M8 8H10V14H8V8M18 5V6H19V9H20V13H19V16H18V17H3V16H2V6H3V5H18M17 7H4V15H17V7M11 8H13V14H11V8M14 8H16V14H14V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Battery100;
