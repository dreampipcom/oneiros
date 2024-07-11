/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MonitorProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MonitorProps & React.SVGProps<SVGSVGElement>>;

const Monitor: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MonitorProps) {
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
          id="memory-monitor"
          viewBox="0 0 22 22"
        >
          <path d="M2 2H20V3H21V15H20V16H13V18H15V20H7V18H9V16H2V15H1V3H2V2M3 4V14H19V4H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Monitor;
