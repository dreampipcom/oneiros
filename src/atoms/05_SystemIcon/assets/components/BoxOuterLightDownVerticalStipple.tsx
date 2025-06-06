/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-down-vertical-stipple
import React from 'react';

interface BoxOuterLightDownVerticalStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDownVerticalStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDownVerticalStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDownVerticalStippleProps) {
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
          id="memory-box-outer-light-down-vertical-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M6 3H5V2H6M14 4H15V3H14M7 5H8V4H7M17 7H16V6H17M6 8H5V7H6M14 10H15V9H14M7 11H8V10H7M17 12H16V11H17M6 13H5V12H6M14 14H15V13H14M3 16H2V15H3M7 15H8V14H7M17 16H16V15H17M21 16H20V15H21M4 18H5V17H4M9 19H8V18H7V19H6V18H5V19H4V18H3V19H2V18H1V19H0V18H1V17H0V16H1V17H2V18H3V17H4V16H5V17H6V18H7V17H8V16H7V15H6V14H7V13H8V12H7V11H6V10H7V9H8V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H8V6H9V7H8V8H9V9H8V10H9V11H8V12H9V13H8V14H9V15H8V16H9V17H8V18H9M14 18H15V17H14M18 18H19V17H18M21 19H20V18H19V19H18V18H17V19H16V18H15V19H14V18H13V17H14V16H13V15H14V14H13V13H14V12H13V11H14V10H13V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H14V8H15V9H16V10H15V11H14V12H15V13H16V14H15V15H14V16H15V17H16V18H17V17H18V16H19V17H20V18H21V17H22V18H21M22 22H0V20H10V0H12V20H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDownVerticalStipple;
