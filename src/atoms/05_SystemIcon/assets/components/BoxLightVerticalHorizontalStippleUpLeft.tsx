/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-vertical-horizontal-stipple-up-left
import React from 'react';

interface BoxLightVerticalHorizontalStippleUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalHorizontalStippleUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalHorizontalStippleUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalHorizontalStippleUpLeftProps) {
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
          id="memory-box-light-vertical-horizontal-stipple-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M6 3H5V2H6M3 6H2V5H3M7 5H8V4H7M4 8H5V7H4M9 9H8V8H7V9H6V8H5V9H4V8H3V9H2V8H1V9H0V8H1V7H0V6H1V7H2V8H3V7H4V6H5V7H6V8H7V7H8V6H7V5H6V4H7V3H8V2H7V1H6V0H7V1H8V0H9V1H8V2H9V3H8V4H9V5H8V6H9V7H8V8H9M12 22H10V12H0V10H10V0H12V10H22V12H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalHorizontalStippleUpLeft;
