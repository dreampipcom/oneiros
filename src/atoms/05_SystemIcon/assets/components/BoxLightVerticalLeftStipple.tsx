/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-vertical-left-stipple
import React from 'react';

interface BoxLightVerticalLeftStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalLeftStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalLeftStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalLeftStippleProps) {
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
          id="memory-box-light-vertical-left-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M6 3H5V2H6M14 4H15V3H14M3 6H2V5H3M7 5H8V4H7M17 6H16V5H17M4 8H5V7H4M9 9H8V8H7V9H6V8H5V9H4V8H3V9H2V8H1V9H0V8H1V7H0V6H1V7H2V8H3V7H4V6H5V7H6V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H8V6H9V7H8V8H9M14 8H15V7H14M17 11H16V10H17M14 14H15V13H14M3 15H4V14H3M7 15H8V14H7M17 16H16V15H17M2 17H1V16H2M6 17H5V16H6M14 18H15V17H14M7 19H8V18H7M17 20H16V19H17M6 21H5V20H6M8 22H7V21H8V20H7V19H6V18H7V17H8V16H7V15H6V14H5V15H4V16H3V15H2V14H1V15H0V14H1V13H2V14H3V13H4V14H5V13H6V14H7V13H8V14H9V15H8V16H9V17H8V18H9V19H8V20H9V21H8M12 22H10V12H0V10H10V0H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V12H13V11H14V10H13V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H15V9H14V10H15V11H14V12H15V13H16V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalLeftStipple;
