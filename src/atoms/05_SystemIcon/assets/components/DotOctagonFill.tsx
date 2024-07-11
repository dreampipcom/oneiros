/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DotOctagonFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DotOctagonFillProps & React.SVGProps<SVGSVGElement>>;

const DotOctagonFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DotOctagonFillProps) {
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
          id="memory-dot-octagon-fill"
          viewBox="0 0 22 22"
        >
          <path d="M15 21H7V20H6V19H5V18H4V17H3V16H2V15H1V7H2V6H3V5H4V4H5V3H6V2H7V1H15V2H16V3H17V4H18V5H19V6H20V7H21V15H20V16H19V17H18V18H17V19H16V20H15M12 13V12H13V10H12V9H10V10H9V12H10V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default DotOctagonFill;
