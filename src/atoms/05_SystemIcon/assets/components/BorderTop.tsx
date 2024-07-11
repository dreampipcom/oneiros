/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderTopProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderTopProps & React.SVGProps<SVGSVGElement>>;

const BorderTop: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderTopProps) {
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
          id="memory-border-top"
          viewBox="0 0 22 22"
        >
          <path d="M2 10H4V12H2V10M18 10H20V12H18V10M10 18H12V20H10V18M6 18H8V20H6V18M2 14H4V16H2V14M2 18H4V20H2V18M2 6H4V8H2V6M18 6H20V8H18V6M14 18H16V20H14V18M18 18H20V20H18V18M18 14H20V16H18V14M2 2H20V4H2V2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderTop;
