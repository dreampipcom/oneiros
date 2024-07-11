/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WellProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WellProps & React.SVGProps<SVGSVGElement>>;

const Well: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WellProps) {
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
          id="memory-well"
          viewBox="0 0 22 22"
        >
          <path d="M19 21H3V16H1V14H21V16H19V21M5 16V19H17V16H5M2 7V5H3V4H4V3H5V2H6V1H16V2H17V3H18V4H19V5H20V7H18V13H16V7H12V9H14V13H8V9H10V7H6V13H4V7H2M7 3V4H6V5H16V4H15V3H7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Well;
