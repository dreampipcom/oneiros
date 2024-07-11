/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleRoundDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleRoundDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleRoundDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleRoundDownRightProps) {
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
          id="memory-box-light-double-round-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M0 12H3V11H5V10H7V9H8V8H9V7H10V5H11V3H12V0H14V4H13V6H12V8H11V9H10V10H9V11H8V12H6V13H4V14H0V12M10 0V2H9V5H8V6H7V7H6V8H5V9H2V10H0V8H1V7H4V6H5V5H6V4H7V1H8V0H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleRoundDownRight;
