/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/border-none
import React from 'react';

interface BorderNoneProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BorderNoneProps & React.SVGProps<SVGSVGElement>>;

const BorderNone: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderNoneProps) {
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
          id="memory-border-none"
          viewBox="0 0 22 22"
        >
          <path d="M2 10H4V12H2V10M18 10H20V12H18V10M10 2H12V4H10V2M10 18H12V20H10V18M6 18H8V20H6V18M2 14H4V16H2V14M2 18H4V20H2V18M2 2H4V4H2V2M2 6H4V8H2V6M6 2H8V4H6V2M14 2H16V4H14V2M18 2H20V4H18V2M18 6H20V8H18V6M14 18H16V20H14V18M18 18H20V20H18V18M18 14H20V16H18V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderNone;
