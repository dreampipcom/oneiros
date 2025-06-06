/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-round-down-left-stipple
import React from 'react';

interface BoxLightRoundDownLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundDownLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundDownLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundDownLeftStippleProps) {
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
          id="memory-box-light-round-down-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M6 3H5V2H6M18 3H17V2H18M20 5H19V4H20M7 5H8V4H7M15 5H16V4H15M8 6H9V5H8M21 9H20V8H19V7H18V8H17V7H16V6H15V5H14V4H15V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H17V5H16V6H17V7H18V6H19V7H20V8H21V7H22V8H21M9 10H8V9H9M22 12H18V11H15V10H14V9H13V8H12V7H11V4H10V0H12V3H13V6H14V7H15V8H16V9H19V10H22M12 13H11V12H12M16 14H17V13H16M15 16H14V15H15M17 15H18V14H17M22 16H21V15H20V14H19V15H18V16H17V15H16V14H15V13H14V14H13V13H14V12H13V11H12V10H11V11H10V10H11V9H10V8H9V7H8V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H10V6H9V7H10V8H11V9H12V10H13V11H14V12H15V13H16V12H17V13H18V14H19V13H20V14H21V13H22V14H21V15H22M20 17H19V16H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundDownLeftStipple;
