/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-down-vertical-stipple-left
import React from 'react';

interface BoxOuterLightDownVerticalStippleLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDownVerticalStippleLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDownVerticalStippleLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDownVerticalStippleLeftProps) {
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
          id="memory-box-outer-light-down-vertical-stipple-left"
          viewBox="0 0 22 22"
        >
          <path d="M6 3H5V2H6M7 5H8V4H7M6 8H5V7H6M7 11H8V10H7M6 13H5V12H6M3 16H2V15H3M7 15H8V14H7M4 18H5V17H4M9 19H8V18H7V19H6V18H5V19H4V18H3V19H2V18H1V19H0V18H1V17H0V16H1V17H2V18H3V17H4V16H5V17H6V18H7V17H8V16H7V15H6V14H7V13H8V12H7V11H6V10H7V9H8V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H8V6H9V7H8V8H9V9H8V10H9V11H8V12H9V13H8V14H9V15H8V16H9V17H8V18H9M22 22H0V20H10V0H12V20H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDownVerticalStippleLeft;
