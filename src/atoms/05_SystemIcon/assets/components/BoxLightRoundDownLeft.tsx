/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundDownLeftProps) {
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
          id="memory-box-light-round-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M22 12H18V11H15V10H14V9H13V8H12V7H11V4H10V0H12V3H13V6H14V7H15V8H16V9H19V10H22V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundDownLeft;
