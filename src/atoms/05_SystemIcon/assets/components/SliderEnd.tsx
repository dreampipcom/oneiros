/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SliderEndProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SliderEndProps & React.SVGProps<SVGSVGElement>>;

const SliderEnd: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SliderEndProps) {
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
          id="memory-slider-end"
          viewBox="0 0 22 22"
        >
          <path d="M5 12H1V10H5M9 13H7V12H6V10H7V9H9V10H10V12H9M19 15H17V12H11V10H17V7H19M11 18H5V16H6V15H7V14H9V15H10V16H11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default SliderEnd;
