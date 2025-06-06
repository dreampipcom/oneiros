/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/border-top-left
import React from 'react';

interface BorderTopLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderTopLeftProps & React.SVGProps<SVGSVGElement>>;

const BorderTopLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderTopLeftProps) {
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
          id="memory-border-top-left"
          viewBox="0 0 22 22"
        >
          <path d="M18 10H20V12H18V10M10 18H12V20H10V18M6 18H8V20H6V18M18 6H20V8H18V6M14 18H16V20H14V18M18 18H20V20H18V18M18 14H20V16H18V14M2 2H20V4H4V20H2V2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderTopLeft;
