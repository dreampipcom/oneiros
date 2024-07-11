/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SliderRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SliderRightProps & React.SVGProps<SVGSVGElement>>;

const SliderRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SliderRightProps) {
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
          id="memory-slider-right"
          viewBox="0 0 22 22"
        >
          <path d="M21 12H17V10H21M15 13H13V12H12V10H13V9H15V10H16V12H15M5 15H3V7H5V10H11V12H5M17 18H11V16H12V15H13V14H15V15H16V16H17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default SliderRight;
