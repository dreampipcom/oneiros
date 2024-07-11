/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleRoundDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleRoundDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleRoundDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleRoundDownLeftProps) {
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
          id="memory-box-light-double-round-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M10 0V3H11V5H12V7H13V8H14V9H15V10H17V11H19V12H22V14H18V13H16V12H14V11H13V10H12V9H11V8H10V6H9V4H8V0H10M22 10H20V9H17V8H16V7H15V6H14V5H13V2H12V0H14V1H15V4H16V5H17V6H18V7H21V8H22V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleRoundDownLeft;
