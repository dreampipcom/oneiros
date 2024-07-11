/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDownVerticalStippleRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDownVerticalStippleRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDownVerticalStippleRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDownVerticalStippleRightProps) {
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
          id="memory-box-outer-light-down-vertical-stipple-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M14 4H15V3H14M17 7H16V6H17M14 10H15V9H14M17 12H16V11H17M14 14H15V13H14M17 16H16V15H17M21 16H20V15H21M14 18H15V17H14M18 18H19V17H18M21 19H20V18H19V19H18V18H17V19H16V18H15V19H14V18H13V17H14V16H13V15H14V14H13V13H14V12H13V11H14V10H13V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H14V8H15V9H16V10H15V11H14V12H15V13H16V14H15V15H14V16H15V17H16V18H17V17H18V16H19V17H20V18H21V17H22V18H21M22 22H0V20H10V0H12V20H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDownVerticalStippleRight;
