/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundUpLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpLeftStippleProps) {
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
          id="memory-box-light-round-up-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M17 6H16V5H17M21 6H20V5H21M14 7H13V6H14M12 9H11V8H12M18 8H19V7H18M15 9H16V8H15M9 12H8V11H9M7 16H6V15H7M18 16H19V15H18M21 18H20V17H21M7 19H8V18H7M15 19H16V18H15M6 21H5V20H6M18 21H17V20H18M8 22H7V21H8V20H7V19H6V18H7V17H8V16H9V15H8V14H9V13H10V12H11V11H10V10H11V11H12V10H13V9H14V8H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21V9H20V8H19V9H18V8H17V9H16V10H15V9H14V10H13V11H12V12H11V13H10V14H9V15H10V16H9V17H8V18H9V19H8V20H9V21H8M12 22H10V18H11V15H12V14H13V13H14V12H15V11H18V10H22V12H19V13H16V14H15V15H14V16H13V19H12M14 22H13V21H14V20H15V19H14V18H15V17H16V16H17V15H18V14H19V15H20V14H21V13H22V14H21V15H20V16H19V17H18V16H17V17H16V18H17V19H16V20H15V21H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpLeftStipple;
