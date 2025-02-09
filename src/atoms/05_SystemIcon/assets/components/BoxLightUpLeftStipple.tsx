/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-up-left-stipple
import React from 'react';

interface BoxLightUpLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightUpLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightUpLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightUpLeftStippleProps) {
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
          id="memory-box-light-up-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M9 6H8V5H9M13 6H12V5H13M17 6H16V5H17M21 6H20V5H21M8 8H7V7H8M6 9H5V8H6M10 8H11V7H10M14 8H15V7H14M18 8H19V7H18M7 11H8V10H7M6 13H5V12H6M7 15H8V14H7M17 15H18V14H17M6 17H5V16H6M20 17H19V16H20M14 18H15V17H14M7 19H8V18H7M17 20H16V19H17M6 21H5V20H6M12 22H10V10H9V11H8V12H9V13H8V14H9V15H8V16H9V17H8V18H9V19H8V20H9V21H8V22H7V21H8V20H7V19H6V18H7V17H8V16H7V15H6V14H7V13H8V12H7V11H6V10H7V9H8V10H9V9H10V8H9V7H10V6H11V7H12V8H13V7H14V6H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21V9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V9H12V8H11V9H10V10H22V12H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V14H15V13H16V14H17V13H18V14H19V13H20V14H21V13H22V14H21V15H22V16H21V15H20V14H19V15H18V16H17V15H16V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightUpLeftStipple;
