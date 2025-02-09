/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-vertical-stipple-right
import React from 'react';

interface BoxLightVerticalStippleRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalStippleRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalStippleRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalStippleRightProps) {
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
          id="memory-box-light-vertical-stipple-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 2H16V1H17M14 4H15V3H14M17 6H16V5H17M14 8H15V7H14M17 11H16V10H17M14 14H15V13H14M17 16H16V15H17M14 18H15V17H14M17 20H16V19H17M12 22H10V0H12M16 22H15V21H14V22H13V21H14V20H13V19H14V18H13V17H14V16H13V15H14V14H13V13H14V12H13V11H14V10H13V9H14V8H13V7H14V6H13V5H14V4H13V3H14V2H13V1H14V0H15V1H14V2H15V3H16V4H15V5H14V6H15V7H16V8H15V9H14V10H15V11H14V12H15V13H16V14H15V15H14V16H15V17H16V18H15V19H14V20H15V21H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalStippleRight;
