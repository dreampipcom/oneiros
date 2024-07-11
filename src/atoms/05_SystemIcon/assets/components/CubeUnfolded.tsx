/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CubeUnfoldedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CubeUnfoldedProps & React.SVGProps<SVGSVGElement>>;

const CubeUnfolded: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CubeUnfoldedProps) {
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
          id="memory-cube-unfolded"
          viewBox="0 0 22 22"
        >
          <path d="M12 3V8H22V15H17V20H10V15H0V8H5V3H12M10 5H7V8H10V5M7 10V13H10V10H7M5 10H2V13H5V10M17 10V13H20V10H17M15 15H12V18H15V15M12 10V13H15V10H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CubeUnfolded;
