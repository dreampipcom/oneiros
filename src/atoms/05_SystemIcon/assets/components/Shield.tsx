/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ShieldProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ShieldProps & React.SVGProps<SVGSVGElement>>;

const Shield: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ShieldProps) {
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
          id="memory-shield"
          viewBox="0 0 22 22"
        >
          <path d="M3 4H5V3H7V2H9V1H13V2H15V3H17V4H19V14H18V16H17V18H16V19H15V20H13V21H9V20H7V19H6V18H5V16H4V14H3V4M10 3V4H8V5H6V6H5V13H6V15H7V17H8V18H10V19H12V18H14V17H15V15H16V13H17V6H16V5H14V4H12V3H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Shield;
