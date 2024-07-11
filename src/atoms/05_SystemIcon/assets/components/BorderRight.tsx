/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderRightProps & React.SVGProps<SVGSVGElement>>;

const BorderRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderRightProps) {
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
          id="memory-border-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 2V4H10V2H12M12 18V20H10V18H12M4 10V12H2V10H4M4 6V8H2V6H4M8 2V4H6V2H8M4 2V4H2V2H4M16 2V4H14V2H16M16 18V20H14V18H16M4 14V16H2V14H4M4 18V20H2V18H4M8 18V20H6V18H8M20 2V20H18V2H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderRight;
