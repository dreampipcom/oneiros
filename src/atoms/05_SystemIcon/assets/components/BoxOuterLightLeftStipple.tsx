/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightLeftStippleProps) {
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
          id="memory-box-outer-light-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M7 2H6V1H7M4 4H5V3H4M7 6H6V5H7M4 8H5V7H4M7 11H6V10H7M4 14H5V13H4M7 16H6V15H7M4 18H5V17H4M7 20H6V19H7M2 22H0V0H2M6 22H5V21H4V22H3V21H4V20H3V19H4V18H3V17H4V16H3V15H4V14H3V13H4V12H3V11H4V10H3V9H4V8H3V7H4V6H3V5H4V4H3V3H4V2H3V1H4V0H5V1H4V2H5V3H6V4H5V5H4V6H5V7H6V8H5V9H4V10H5V11H4V12H5V13H6V14H5V15H4V16H5V17H6V18H5V19H4V20H5V21H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightLeftStipple;
