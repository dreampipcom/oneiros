/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WallFrontProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WallFrontProps & React.SVGProps<SVGSVGElement>>;

const WallFront: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WallFrontProps) {
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
          id="memory-wall-front"
          viewBox="0 0 22 22"
        >
          <path d="M20 18H2V4H4V6H6V4H8V6H10V4H12V6H14V4H16V6H18V4H20M18 16V8H4V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default WallFront;
