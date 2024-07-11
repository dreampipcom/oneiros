/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckerLargeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckerLargeProps & React.SVGProps<SVGSVGElement>>;

const CheckerLarge: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckerLargeProps) {
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
          id="memory-checker-large"
          viewBox="0 0 22 22"
        >
          <path d="M22 22H16V16H10V22H5V16H0V10H5V5H0V0H5V5H10V0H16V5H22V10H16V16H22M16 10V5H10V10M10 16V10H5V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CheckerLarge;
