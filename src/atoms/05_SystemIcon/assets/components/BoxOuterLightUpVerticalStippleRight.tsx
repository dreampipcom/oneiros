/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightUpVerticalStippleRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightUpVerticalStippleRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightUpVerticalStippleRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightUpVerticalStippleRightProps) {
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
          id="memory-box-outer-light-up-vertical-stipple-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 5H18V4H17M20 7H19V6H20M14 8H15V7H14M17 10H16V9H17M14 12H15V11H14M17 15H16V14H17M14 18H15V17H14M17 20H16V19H17M12 22H10V2H0V0H22V2H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V12H13V11H14V10H13V9H14V8H13V7H14V6H13V5H14V4H13V3H14V4H15V3H16V4H17V3H18V4H19V3H20V4H21V3H22V4H21V5H22V6H21V5H20V4H19V5H18V6H17V5H16V4H15V5H14V6H15V7H16V8H15V9H14V10H15V11H16V12H15V13H14V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightUpVerticalStippleRight;
