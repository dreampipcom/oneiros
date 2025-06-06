/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-left-right-stipple
import React from 'react';

interface BoxOuterLightLeftRightStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightLeftRightStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightLeftRightStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightLeftRightStippleProps) {
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
          id="memory-box-outer-light-left-right-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M7 2H6V1H7M16 3H15V2H16M4 4H5V3H4M7 6H6V5H7M17 5H18V4H17M16 7H15V6H16M4 8H5V7H4M17 9H18V8H17M7 11H6V10H7M16 12H15V11H16M4 14H5V13H4M7 16H6V15H7M17 15H18V14H17M16 17H15V16H16M4 18H5V17H4M7 20H6V19H7M17 19H18V18H17M16 21H15V20H16M2 22H0V0H2M6 22H5V21H4V22H3V21H4V20H3V19H4V18H3V17H4V16H3V15H4V14H3V13H4V12H3V11H4V10H3V9H4V8H3V7H4V6H3V5H4V4H3V3H4V2H3V1H4V0H5V1H4V2H5V3H6V4H5V5H4V6H5V7H6V8H5V9H4V10H5V11H4V12H5V13H6V14H5V15H4V16H5V17H6V18H5V19H4V20H5V21H6M18 22H17V21H18V20H17V19H16V18H17V17H18V16H17V15H16V14H17V13H18V12H17V11H18V10H17V9H16V8H17V7H18V6H17V5H16V4H17V3H18V2H17V1H16V0H17V1H18V0H19V1H18V2H19V3H18V4H19V5H18V6H19V7H18V8H19V9H18V10H19V11H18V12H19V13H18V14H19V15H18V16H19V17H18V18H19V19H18V20H19V21H18M22 22H20V0H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightLeftRightStipple;
