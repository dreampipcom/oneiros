/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightRoundUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightRoundUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightRoundUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightRoundUpRightProps) {
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
          id="memory-box-outer-light-round-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M22 22H20V17H19V13H18V11H17V9H16V8H15V7H14V6H13V5H11V4H9V3H5V2H.004V0H6V1H10V2H12V3H14V4H15V5H16V6H17V7H18V8H19V10H20V12H21V16H22V22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightRoundUpRight;
