/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleVerticalRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleVerticalRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleVerticalRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleVerticalRightProps) {
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
          id="memory-box-light-double-vertical-right"
          viewBox="0 0 22 22"
        >
          <path d="M22 10H12V0H14V8H22M10 22H8V0H10M14 22H12V12H22V14H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleVerticalRight;
