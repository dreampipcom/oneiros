/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleVerticalLightLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleVerticalLightLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleVerticalLightLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleVerticalLightLeftProps) {
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
          id="memory-box-light-double-vertical-light-left"
          viewBox="0 0 22 22"
        >
          <path d="M10 22H8V12H0V10H8V0H10M14 22H12V0H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleVerticalLightLeft;
