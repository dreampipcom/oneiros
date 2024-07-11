/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundDownLeftStippleInnerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundDownLeftStippleInnerProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundDownLeftStippleInner: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundDownLeftStippleInnerProps) {
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
          id="memory-box-light-round-down-left-stipple-inner"
          viewBox="0 0 22 22"
        >
          <path d="M18 3H17V2H18M20 5H19V4H20M15 5H16V4H15M21 9H20V8H19V7H18V8H17V7H16V6H15V5H14V4H15V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H17V5H16V6H17V7H18V6H19V7H20V8H21V7H22V8H21M22 12H18V11H15V10H14V9H13V8H12V7H11V4H10V0H12V3H13V6H14V7H15V8H16V9H19V10H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundDownLeftStippleInner;
