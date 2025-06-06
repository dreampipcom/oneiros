/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-down-right-stipple-outer
import React from 'react';

interface BoxLightDownRightStippleOuterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDownRightStippleOuterProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDownRightStippleOuter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDownRightStippleOuterProps) {
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
          id="memory-box-light-down-right-stipple-outer"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M14 4H15V3H14M17 6H16V5H17M14 8H15V7H14M17 10H16V9H17M14 12H15V11H14M17 14H16V13H17M15 15H14V14H15M3 15H4V14H3M7 15H8V14H7M11 15H12V14H11M12 16H11V15H10V14H9V15H8V16H7V15H6V14H5V15H4V16H3V15H2V14H1V15H0V14H1V13H2V14H3V13H4V14H5V13H6V14H7V13H8V14H9V13H10V14H11V13H12V12H0V10H10V0H12V12H13V11H14V10H13V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H15V9H14V10H15V11H16V12H15V13H14V12H13V13H12V14H13V15H12M2 17H1V16H2M6 17H5V16H6M10 17H9V16H10M14 17H13V16H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDownRightStippleOuter;
