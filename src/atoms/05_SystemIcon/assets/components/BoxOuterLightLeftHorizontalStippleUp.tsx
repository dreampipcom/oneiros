/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-left-horizontal-stipple-up
import React from 'react';

interface BoxOuterLightLeftHorizontalStippleUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightLeftHorizontalStippleUpProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightLeftHorizontalStippleUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightLeftHorizontalStippleUpProps) {
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
          id="memory-box-outer-light-left-horizontal-stipple-up"
          viewBox="0 0 22 22"
        >
          <path d="M7 2H6V1H7M4 4H5V3H4M7 6H6V5H7M11 6H10V5H11M16 6H15V5H16M21 6H20V5H21M4 8H5V7H4M8 8H9V7H8M12 8H13V7H12M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V9H12V8H11V9H10V8H9V9H8V8H7V9H6V8H5V9H4V8H3V7H4V6H3V5H4V4H3V3H4V2H3V1H4V0H5V1H4V2H5V3H6V4H5V5H4V6H5V7H6V8H7V7H8V6H9V7H10V8H11V7H12V6H13V7H14V8H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M2 22H0V0H2V10H22V12H2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightLeftHorizontalStippleUp;
