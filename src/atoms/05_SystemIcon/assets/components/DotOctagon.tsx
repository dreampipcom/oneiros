/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DotOctagonProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DotOctagonProps & React.SVGProps<SVGSVGElement>>;

const DotOctagon: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DotOctagonProps) {
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
          id="memory-dot-octagon"
          viewBox="0 0 22 22"
        >
          <path d="M12 13H10V12H9V10H10V9H12V10H13V12H12M15 21H7V20H6V19H5V18H4V17H3V16H2V15H1V7H2V6H3V5H4V4H5V3H6V2H7V1H15V2H16V3H17V4H18V5H19V6H20V7H21V15H20V16H19V17H18V18H17V19H16V20H15M14 19V18H15V17H16V16H17V15H18V14H19V8H18V7H17V6H16V5H15V4H14V3H8V4H7V5H6V6H5V7H4V8H3V14H4V15H5V16H6V17H7V18H8V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default DotOctagon;
