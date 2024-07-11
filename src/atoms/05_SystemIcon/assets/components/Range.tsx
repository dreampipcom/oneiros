/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface RangeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<RangeProps & React.SVGProps<SVGSVGElement>>;

const Range: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: RangeProps) {
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
          id="memory-range"
          viewBox="0 0 22 22"
        >
          <path d="M7 8H5V7H4V6H3V4H9V6H8V7H7M3 12H1V10H3M12 12H9V10H12M21 12H18V10H21M7 13H5V12H4V10H5V9H7V10H8V12H7M16 13H14V12H13V10H14V9H16V10H17V12H16M18 18H12V16H13V15H14V14H16V15H17V16H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Range;
