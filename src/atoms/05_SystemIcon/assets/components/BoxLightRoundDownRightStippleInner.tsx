/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundDownRightStippleInnerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundDownRightStippleInnerProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundDownRightStippleInner: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundDownRightStippleInnerProps) {
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
          id="memory-box-light-round-down-right-stipple-inner"
          viewBox="0 0 22 22"
        >
          <path d="M5 2H4V1H5M2 5H1V4H2M6 4H7V3H6M3 7H4V6H3M1 9H0V8H1V7H2V6H3V5H4V6H5V5H6V4H5V3H6V2H7V1H8V0H9V1H8V2H7V3H8V4H7V5H6V6H5V7H4V8H3V7H2V8H1M4 12H0V10H3V9H6V8H7V7H8V6H9V3H10V0H12V4H11V7H10V8H9V9H8V10H7V11H4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundDownRightStippleInner;
