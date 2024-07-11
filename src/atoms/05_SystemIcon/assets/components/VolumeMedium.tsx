/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface VolumeMediumProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<VolumeMediumProps & React.SVGProps<SVGSVGElement>>;

const VolumeMedium: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: VolumeMediumProps) {
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
          id="memory-volume-medium"
          viewBox="0 0 22 22"
        >
          <path d="M16 7V8H17V10H18V12H17V14H16V15H15V7H16M8 8V7H9V6H10V5H11V4H12V3H13V19H12V18H11V17H10V16H9V15H8V14H4V8H8M6 10V12H9V13H10V14H11V8H10V9H9V10H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default VolumeMedium;
