/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-vertical-right-stipple-right
import React from 'react';

interface BoxLightVerticalRightStippleRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalRightStippleRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalRightStippleRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalRightStippleRightProps) {
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
          id="memory-box-light-vertical-right-stipple-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M14 4H15V3H14M17 6H16V5H17M21 6H20V5H21M14 8H15V7H14M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M17 15H18V14H17M20 17H19V16H20M14 18H15V17H14M17 20H16V19H17M12 22H10V0H12V10H22V12H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V14H15V13H16V14H17V13H18V14H19V13H20V14H21V13H22V14H21V15H22V16H21V15H20V14H19V15H18V16H17V15H16V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalRightStippleRight;
