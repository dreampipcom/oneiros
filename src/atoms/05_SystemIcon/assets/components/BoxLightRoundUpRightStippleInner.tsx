/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-round-up-right-stipple-inner
import React from 'react';

interface BoxLightRoundUpRightStippleInnerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpRightStippleInnerProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpRightStippleInner: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpRightStippleInnerProps) {
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
          id="memory-box-light-round-up-right-stipple-inner"
          viewBox="0 0 22 22"
        >
          <path d="M3 18H2V17H3M6 18H7V17H6M5 20H4V19H5M8 22H7V21H8V20H7V19H6V18H5V17H6V16H5V15H4V16H3V15H2V14H1V15H0V14H1V13H2V14H3V15H4V14H5V15H6V16H7V17H8V18H7V19H8V20H9V21H8M12 22H10V19H9V16H8V15H7V14H6V13H3V12H0V10H4V11H7V12H8V13H9V14H10V15H11V18H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpRightStippleInner;
