/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DoorProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DoorProps & React.SVGProps<SVGSVGElement>>;

const Door: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DoorProps) {
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
          id="memory-door"
          viewBox="0 0 22 22"
        >
          <path d="M12 10H14V12H12V10M16 2V3H17V18H19V20H3V18H5V3H6V2H16M15 4H7V18H15V4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Door;
