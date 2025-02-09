/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-up-vertical-stipple-left
import React from 'react';

interface BoxOuterLightUpVerticalStippleLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightUpVerticalStippleLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightUpVerticalStippleLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightUpVerticalStippleLeftProps) {
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
          id="memory-box-outer-light-up-vertical-stipple-left"
          viewBox="0 0 22 22"
        >
          <path d="M3 5H4V4H3M7 5H8V4H7M2 7H1V6H2M6 7H5V6H6M7 9H8V8H7M6 11H5V10H6M7 13H8V12H7M6 16H5V15H6M7 19H8V18H7M6 21H5V20H6M8 22H7V21H8V20H7V19H6V18H7V17H8V16H7V15H8V14H7V13H6V12H7V11H8V10H7V9H6V8H7V7H8V6H7V5H6V4H5V5H4V6H3V5H2V4H1V5H0V4H1V3H2V4H3V3H4V4H5V3H6V4H7V3H8V4H9V5H8V6H9V7H8V8H9V9H8V10H9V11H8V12H9V13H8V14H9V15H8V16H9V17H8V18H9V19H8V20H9V21H8M12 22H10V2H0V0H22V2H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightUpVerticalStippleLeft;
