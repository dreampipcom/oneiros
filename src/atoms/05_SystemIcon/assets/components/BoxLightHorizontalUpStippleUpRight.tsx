/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightHorizontalUpStippleUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightHorizontalUpStippleUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightHorizontalUpStippleUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightHorizontalUpStippleUpRightProps) {
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
          id="memory-box-light-horizontal-up-stipple-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M14 4H15V3H14M17 6H16V5H17M21 6H20V5H21M14 8H15V7H14M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M22 12H0V10H10V0H12V10H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightHorizontalUpStippleUpRight;
