/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface HomeThatchedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<HomeThatchedProps & React.SVGProps<SVGSVGElement>>;

const HomeThatched: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: HomeThatchedProps) {
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
          id="memory-home-thatched"
          viewBox="0 0 22 22"
        >
          <path d="M19 20H3V12H1V9H2V6H3V3H4V2H18V5H19V7H20V9H21V12H20V13H19M16 10V9H18V8H17V6H16V4H6V6H5V8H4V9H6V10H9V9H13V10M12 18V15H10V18M17 18V11H16V12H12V11H10V12H6V11H5V18H8V13H14V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default HomeThatched;
