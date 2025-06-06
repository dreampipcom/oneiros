/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-round-up-left-stipple-outer
import React from 'react';

interface BoxLightRoundUpLeftStippleOuterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpLeftStippleOuterProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpLeftStippleOuter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpLeftStippleOuterProps) {
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
          id="memory-box-light-round-up-left-stipple-outer"
          viewBox="0 0 22 22"
        >
          <path d="M17 6H16V5H17M21 6H20V5H21M14 7H13V6H14M12 9H11V8H12M18 8H19V7H18M15 9H16V8H15M9 12H8V11H9M7 16H6V15H7M7 19H8V18H7M6 21H5V20H6M8 22H7V21H8V20H7V19H6V18H7V17H8V16H9V15H8V14H9V13H10V12H11V11H10V10H11V11H12V10H13V9H14V8H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21V9H20V8H19V9H18V8H17V9H16V10H15V9H14V10H13V11H12V12H11V13H10V14H9V15H10V16H9V17H8V18H9V19H8V20H9V21H8M12 22H10V18H11V15H12V14H13V13H14V12H15V11H18V10H22V12H19V13H16V14H15V15H14V16H13V19H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpLeftStippleOuter;
