/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderBottomProps & React.SVGProps<SVGSVGElement>>;

const BorderBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderBottomProps) {
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
          id="memory-border-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M20 12H18V10H20V12M4 12H2V10H4V12M12 4H10V2H12V4M16 4H14V2H16V4M20 8H18V6H20V8M20 4H18V2H20V4M20 16H18V14H20V16M4 16H2V14H4V16M8 4H6V2H8V4M4 4H2V2H4V4M4 8H2V6H4V8M20 20H2V18H20V20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderBottom;
