/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/border-top-bottom
import React from 'react';

interface BorderTopBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BorderTopBottomProps & React.SVGProps<SVGSVGElement>
>;

const BorderTopBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderTopBottomProps) {
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
          id="memory-border-top-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M2 10H4V12H2V10M18 10H20V12H18V10M2 14H4V16H2V14M2 6H4V8H2V6M18 6H20V8H18V6M18 14H20V16H18V14M2 18H20V20H2V18M2 4V2H20V4H2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderTopBottom;
