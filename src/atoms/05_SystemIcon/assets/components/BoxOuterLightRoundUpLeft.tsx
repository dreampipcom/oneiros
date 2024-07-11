/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightRoundUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightRoundUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightRoundUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightRoundUpLeftProps) {
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
          id="memory-box-outer-light-round-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M22 0V2H17V3H13V4H11V5H9V6H8V7H7V8H6V9H5V11H4V13H3V17H2V22H.004V16H1V12H2V10H3V8H4V7H5V6H6V5H7V4H8V3H10V2H12V1H16V0H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightRoundUpLeft;
