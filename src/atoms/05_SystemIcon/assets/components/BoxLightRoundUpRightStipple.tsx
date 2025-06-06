/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-round-up-right-stipple
import React from 'react';

interface BoxLightRoundUpRightStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpRightStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpRightStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpRightStippleProps) {
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
          id="memory-box-light-round-up-right-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M3 6H2V5H3M8 7H7V6H8M4 8H5V7H4M5 9H6V8H5M11 10H10V9H11M14 13H13V12H14M3 18H2V17H3M13 17H14V16H13M6 18H7V17H6M14 18H15V17H14M5 20H4V19H5M17 20H16V19H17M8 22H7V21H8V20H7V19H6V18H5V17H6V16H5V15H4V16H3V15H2V14H1V15H0V14H1V13H2V14H3V15H4V14H5V15H6V16H7V17H8V18H7V19H8V20H9V21H8M12 22H10V19H9V16H8V15H7V14H6V13H3V12H0V10H4V11H7V12H8V13H9V14H10V15H11V18H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H12V16H13V15H12V14H11V13H10V12H9V11H8V10H7V9H6V10H5V9H4V8H3V9H2V8H1V9H0V8H1V7H0V6H1V7H2V8H3V7H4V6H5V7H6V8H7V9H8V8H9V9H8V10H9V11H10V12H11V11H12V12H11V13H12V14H13V15H14V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpRightStipple;
