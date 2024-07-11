/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderTopLeftBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BorderTopLeftBottomProps & React.SVGProps<SVGSVGElement>
>;

const BorderTopLeftBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderTopLeftBottomProps) {
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
          id="memory-border-top-left-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M18 10H20V12H18V10M18 6H20V8H18V6M18 14H20V16H18V14M20 18V20H2V2H20V4H4V18H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderTopLeftBottom;
