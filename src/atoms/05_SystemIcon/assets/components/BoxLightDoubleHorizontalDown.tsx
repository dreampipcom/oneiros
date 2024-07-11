/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleHorizontalDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleHorizontalDownProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleHorizontalDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleHorizontalDownProps) {
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
          id="memory-box-light-double-horizontal-down"
          viewBox="0 0 22 22"
        >
          <path d="M22 10H0V8H22M10 22H8V14H0V12H10M14 22H12V12H22V14H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleHorizontalDown;
