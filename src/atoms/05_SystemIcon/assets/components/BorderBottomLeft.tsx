/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderBottomLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BorderBottomLeftProps & React.SVGProps<SVGSVGElement>
>;

const BorderBottomLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderBottomLeftProps) {
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
          id="memory-border-bottom-left"
          viewBox="0 0 22 22"
        >
          <path d="M10 4V2H12V4H10M18 12V10H20V12H18M18 16V14H20V16H18M6 4V2H8V4H6M18 8V6H20V8H18M18 4V2H20V4H18M14 4V2H16V4H14M2 20V2H4V18H20V20H2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderBottomLeft;
