/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightUpRightStippleOuterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightUpRightStippleOuterProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightUpRightStippleOuter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightUpRightStippleOuterProps) {
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
          id="memory-box-light-up-right-stipple-outer"
          viewBox="0 0 22 22"
        >
          <path d="M3 6H2V5H3M7 6H6V5H7M11 6H10V5H11M15 8H14V7H15M4 8H5V7H4M8 8H9V7H8M17 12H16V11H17M14 14H15V13H14M17 16H16V15H17M14 18H15V17H14M17 20H16V19H17M12 22H10V12H0V10H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V12H13V11H14V10H13V9H12V8H11V9H10V8H9V9H8V8H7V9H6V8H5V9H4V8H3V9H2V8H1V9H0V8H1V7H2V8H3V7H4V6H5V7H6V8H7V7H8V6H9V7H10V8H11V7H12V6H13V7H12V8H13V9H14V10H15V9H16V10H15V11H14V12H15V13H16V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightUpRightStippleOuter;
