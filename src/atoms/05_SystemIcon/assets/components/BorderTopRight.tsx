/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderTopRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderTopRightProps & React.SVGProps<SVGSVGElement>>;

const BorderTopRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderTopRightProps) {
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
          id="memory-border-top-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 18V20H10V18H12M4 10V12H2V10H4M4 6V8H2V6H4M16 18V20H14V18H16M4 14V16H2V14H4M4 18V20H2V18H4M8 18V20H6V18H8M20 2V20H18V4H2V2H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderTopRight;
