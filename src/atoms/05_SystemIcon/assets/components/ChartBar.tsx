/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChartBarProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChartBarProps & React.SVGProps<SVGSVGElement>>;

const ChartBar: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChartBarProps) {
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
          id="memory-chart-bar"
          viewBox="0 0 22 22"
        >
          <path d="M2 2H4V18H20V20H2V2M6 16V8H10V16H6M11 16V4H15V16H11M16 16V11H20V16H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ChartBar;
