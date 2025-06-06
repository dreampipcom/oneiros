/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-down-right-stipple
import React from 'react';

interface BoxOuterLightDownRightStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDownRightStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDownRightStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDownRightStippleProps) {
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
          id="memory-box-outer-light-down-right-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M7 2H6V1H7M4 4H5V3H4M7 6H6V5H7M4 8H5V7H4M7 11H6V10H7M4 14H5V13H4M7 16H6V15H7M12 16H11V15H12M17 16H16V15H17M21 16H20V15H21M4 18H5V17H4M8 18H9V17H8M14 18H15V17H14M18 18H19V17H18M21 19H20V18H19V19H18V18H17V19H16V18H15V19H14V18H13V19H12V18H11V19H10V18H9V19H8V18H7V19H6V18H5V19H4V18H3V17H4V16H3V15H4V14H3V13H4V12H3V11H4V10H3V9H4V8H3V7H4V6H3V5H4V4H3V3H4V2H3V1H4V0H5V1H4V2H5V3H6V4H5V5H4V6H5V7H6V8H5V9H4V10H5V11H4V12H5V13H6V14H5V15H4V16H5V17H6V18H7V17H8V16H9V17H10V18H11V17H12V18H13V17H14V16H15V17H16V18H17V17H18V16H19V17H20V18H21V17H22V18H21M22 22H0V0H2V20H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDownRightStipple;
