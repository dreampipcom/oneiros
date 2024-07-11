/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundDownRightStippleOuterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundDownRightStippleOuterProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundDownRightStippleOuter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundDownRightStippleOuterProps) {
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
          id="memory-box-light-round-down-right-stipple-outer"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M14 4H15V3H14M16 7H15V6H16M14 11H13V10H14M4 12H0V10H3V9H6V8H7V7H8V6H9V3H10V0H12V4H11V7H10V8H9V9H8V10H7V11H4M11 14H10V13H11M6 14H7V13H6M3 15H4V14H3M4 16H3V15H2V14H1V15H0V14H1V13H2V14H3V13H4V14H5V13H6V12H7V13H8V12H9V11H10V10H11V9H12V8H13V7H12V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H13V7H14V8H13V9H12V10H11V11H12V12H11V11H10V12H9V13H8V14H7V15H6V14H5V15H4M9 16H8V15H9M2 17H1V16H2M6 17H5V16H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundDownRightStippleOuter;
