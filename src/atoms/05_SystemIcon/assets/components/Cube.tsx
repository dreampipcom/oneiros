/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CubeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CubeProps & React.SVGProps<SVGSVGElement>>;

const Cube: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CubeProps) {
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
          id="memory-cube"
          viewBox="0 0 22 22"
        >
          <path d="M12 21H10V20H8V19H6V18H4V17H2V5H4V4H6V3H8V2H10V1H12V2H14V3H16V4H18V5H20V17H18V18H16V19H14V20H12M12 10V9H14V8H16V7H18V6H16V5H14V4H12V3H10V4H8V5H6V6H4V7H6V8H8V9H10V10M10 18V11H8V10H6V9H4V16H6V17H8V18M14 18V17H16V16H18V9H16V10H14V11H12V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Cube;
