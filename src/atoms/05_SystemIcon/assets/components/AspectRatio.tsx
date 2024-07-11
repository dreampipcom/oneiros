/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AspectRatioProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AspectRatioProps & React.SVGProps<SVGSVGElement>>;

const AspectRatio: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AspectRatioProps) {
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
          id="memory-aspect-ratio"
          viewBox="0 0 22 22"
        >
          <path d="M17 10H15V8H13V6H17M9 16H5V12H7V14H9M19 19H3V18H2V4H3V3H19V4H20V18H19M18 17V5H4V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AspectRatio;
