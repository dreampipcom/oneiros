/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalLeftStippleDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalLeftStippleDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalLeftStippleDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalLeftStippleDownLeftProps) {
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
          id="memory-box-light-vertical-left-stipple-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M3 15H4V14H3M7 15H8V14H7M2 17H1V16H2M6 17H5V16H6M7 19H8V18H7M6 21H5V20H6M8 22H7V21H8V20H7V19H6V18H7V17H8V16H7V15H6V14H5V15H4V16H3V15H2V14H1V15H0V14H1V13H2V14H3V13H4V14H5V13H6V14H7V13H8V14H9V15H8V16H9V17H8V18H9V19H8V20H9V21H8M12 22H10V12H0V10H10V0H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalLeftStippleDownLeft;
