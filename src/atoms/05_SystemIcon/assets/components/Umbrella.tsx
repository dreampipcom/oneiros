/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface UmbrellaProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<UmbrellaProps & React.SVGProps<SVGSVGElement>>;

const Umbrella: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: UmbrellaProps) {
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
          id="memory-umbrella"
          viewBox="0 0 22 22"
        >
          <path d="M11 20H7V19H6V16H8V18H10V12H3V7H4V6H5V5H6V4H8V3H14V4H16V5H17V6H18V7H19V12H12V19H11M17 10V8H16V7H15V6H13V5H9V6H7V7H6V8H5V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Umbrella;
