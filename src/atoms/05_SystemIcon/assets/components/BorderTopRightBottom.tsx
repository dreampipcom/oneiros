/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderTopRightBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BorderTopRightBottomProps & React.SVGProps<SVGSVGElement>
>;

const BorderTopRightBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderTopRightBottomProps) {
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
          id="memory-border-top-right-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M4 12H2V10H4V12M4 16H2V14H4V16M4 8H2V6H4V8M2 4V2H20V20H2V18H18V4H2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderTopRightBottom;
