/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DotHexagonFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DotHexagonFillProps & React.SVGProps<SVGSVGElement>>;

const DotHexagonFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DotHexagonFillProps) {
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
          id="memory-dot-hexagon-fill"
          viewBox="0 0 22 22"
        >
          <path d="M12 21H10V20H8V19H6V18H4V17H2V5H4V4H6V3H8V2H10V1H12V2H14V3H16V4H18V5H20V17H18V18H16V19H14V20H12M12 13V12H13V10H12V9H10V10H9V12H10V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default DotHexagonFill;
