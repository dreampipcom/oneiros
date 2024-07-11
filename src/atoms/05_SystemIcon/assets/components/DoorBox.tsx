/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DoorBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DoorBoxProps & React.SVGProps<SVGSVGElement>>;

const DoorBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DoorBoxProps) {
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
          id="memory-door-box"
          viewBox="0 0 22 22"
        >
          <path d="M13,14H11V12H13ZM16,18H17V17H18V5H17V4H5V5H4V17H5V18H6V6H16ZM18,20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18ZM14,18V8H8V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default DoorBox;
