/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-left-horizontal-stipple
import React from 'react';

interface BoxOuterLightLeftHorizontalStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightLeftHorizontalStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightLeftHorizontalStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightLeftHorizontalStippleProps) {
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
          id="memory-box-outer-light-left-horizontal-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M7 2H6V1H7M4 4H5V3H4M7 6H6V5H7M11 6H10V5H11M16 6H15V5H16M21 6H20V5H21M4 8H5V7H4M8 8H9V7H8M12 8H13V7H12M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V9H12V8H11V9H10V8H9V9H8V8H7V9H6V8H5V9H4V8H3V7H4V6H3V5H4V4H3V3H4V2H3V1H4V0H5V1H4V2H5V3H6V4H5V5H4V6H5V7H6V8H7V7H8V6H9V7H10V8H11V7H12V6H13V7H14V8H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M7 15H8V14H7M11 15H12V14H11M17 15H18V14H17M10 17H9V16H10M15 17H14V16H15M20 17H19V16H20M4 18H5V17H4M7 20H6V19H7M2 22H0V0H2V10H22V12H2M6 22H5V21H4V22H3V21H4V20H3V19H4V18H3V17H4V16H3V15H4V14H3V13H4V14H5V13H6V14H7V13H8V14H9V13H10V14H11V13H12V14H13V13H14V14H15V13H16V14H17V13H18V14H19V13H20V14H21V13H22V14H21V15H22V16H21V15H20V14H19V15H18V16H17V15H16V14H15V15H14V14H13V15H12V16H11V15H10V14H9V15H8V16H7V15H6V14H5V15H4V16H5V17H6V18H5V19H4V20H5V21H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightLeftHorizontalStipple;
