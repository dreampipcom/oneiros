/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/monitor-image
import React from 'react';

interface MonitorImageProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MonitorImageProps & React.SVGProps<SVGSVGElement>>;

const MonitorImage: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MonitorImageProps) {
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
          id="memory-monitor-image"
          viewBox="0 0 22 22"
        >
          <path d="M14 6H16V7H17V9H16V10H14V9H13V7H14V6M2 2H20V3H21V15H20V16H13V18H15V20H7V18H9V16H2V15H1V3H2V2M3 4V9H4V8H5V7H6V6H8V7H9V8H10V9H11V10H12V11H13V12H14V13H15V14H19V4H3M10 11H9V10H8V9H6V10H5V11H4V12H3V14H12V13H11V12H10V11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MonitorImage;
