/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleHorizontalLightUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleHorizontalLightUpProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleHorizontalLightUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleHorizontalLightUpProps) {
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
          id="memory-box-light-double-horizontal-light-up"
          viewBox="0 0 22 22"
        >
          <path d="M22 10H0V8H10V0H12V8H22M22 14H0V12H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleHorizontalLightUp;
