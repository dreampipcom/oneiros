/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightRightStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightRightStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightRightStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightRightStippleProps) {
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
          id="memory-box-outer-light-right-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M16 3H15V2H16M17 5H18V4H17M16 7H15V6H16M17 9H18V8H17M16 12H15V11H16M17 15H18V14H17M16 17H15V16H16M17 19H18V18H17M16 21H15V20H16M18 22H17V21H18V20H17V19H16V18H17V17H18V16H17V15H16V14H17V13H18V12H17V11H18V10H17V9H16V8H17V7H18V6H17V5H16V4H17V3H18V2H17V1H16V0H17V1H18V0H19V1H18V2H19V3H18V4H19V5H18V6H19V7H18V8H19V9H18V10H19V11H18V12H19V13H18V14H19V15H18V16H19V17H18V18H19V19H18V20H19V21H18M22 22H20V0H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightRightStipple;
