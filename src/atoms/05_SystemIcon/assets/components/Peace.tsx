/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PeaceProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PeaceProps & React.SVGProps<SVGSVGElement>>;

const Peace: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PeaceProps) {
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
          id="memory-peace"
          viewBox="0 0 22 22"
        >
          <path d="M4 15H5V14H6V13H7V12H8V11H9V10H10V3H8V4H6V5H5V6H4V8H3V14H4M17 15H18V14H19V8H18V6H17V5H16V4H14V3H12V10H13V11H14V12H15V13H16V14H17M15 21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15M10 19V13H9V14H8V15H7V16H6V18H8V19M14 19V18H16V16H15V15H14V14H13V13H12V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Peace;
