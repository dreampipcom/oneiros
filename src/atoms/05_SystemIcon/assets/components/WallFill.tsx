/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WallFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WallFillProps & React.SVGProps<SVGSVGElement>>;

const WallFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WallFillProps) {
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
          id="memory-wall-fill"
          viewBox="0 0 22 22"
        >
          <path d="M5 3H11V7H5M13 3H18V7H13M5 15V19H11V15M13 15H18V19H13M8 9H3V13H8M10 9H20V13H10" />
        </svg>
      </g>
    </svg>
  );
};

export default WallFill;
