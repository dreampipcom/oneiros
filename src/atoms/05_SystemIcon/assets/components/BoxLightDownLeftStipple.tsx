/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-down-left-stipple
import React from 'react';

interface BoxLightDownLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDownLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDownLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDownLeftStippleProps) {
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
          id="memory-box-light-down-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M6 3H5V2H6M14 4H15V3H14M7 5H8V4H7M17 6H16V5H17M21 6H20V5H21M6 7H5V6H6M14 8H15V7H14M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M7 9H8V8H7M6 11H5V10H6M22 12H10V0H12V10H22M8 15H7V14H8M13 15H14V14H13M17 15H18V14H17M18 16H17V15H16V14H15V15H14V16H13V15H12V14H11V15H10V16H9V15H10V14H9V13H8V12H7V13H6V12H7V11H8V10H7V9H6V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H8V6H9V7H8V8H9V9H8V10H9V11H8V12H9V13H10V14H11V13H12V14H13V13H14V14H15V13H16V14H17V13H18V14H19V13H20V14H21V13H22V14H21V15H20V14H19V15H18M12 17H11V16H12M16 17H15V16H16M20 17H19V16H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDownLeftStipple;
