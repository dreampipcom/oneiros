/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-up-left-stipple
import React from 'react';

interface BoxOuterLightUpLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightUpLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightUpLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightUpLeftStippleProps) {
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
          id="memory-box-outer-light-up-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M5 5H6V4H5M7 5H8V4H7M13 5H14V4H13M17 5H18V4H17M4 6H5V5H4M11 7H10V6H11M16 7H15V6H16M20 7H19V6H20M8 8H7V7H8M4 8H5V7H4M7 11H6V10H7M4 14H5V13H4M7 16H6V15H7M4 18H5V17H4M7 20H6V19H7M2 22H0V0H22V2H2M6 22H5V21H4V22H3V21H4V20H3V19H4V18H3V17H4V16H3V15H4V14H3V13H4V12H3V11H4V10H3V9H4V8H3V7H4V6H3V5H4V4H3V3H4V4H5V3H6V4H7V3H8V4H9V3H10V4H11V3H12V4H13V3H14V4H15V3H16V4H17V3H18V4H19V3H20V4H21V3H22V4H21V5H22V6H21V5H20V4H19V5H18V6H17V5H16V4H15V5H14V6H13V5H12V4H11V5H10V4H9V5H8V6H7V5H6V6H5V7H6V8H5V9H4V10H5V11H4V12H5V13H6V14H5V15H4V16H5V17H6V18H5V19H4V20H5V21H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightUpLeftStipple;
