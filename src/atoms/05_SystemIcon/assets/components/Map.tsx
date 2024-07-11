/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MapProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MapProps & React.SVGProps<SVGSVGElement>>;

const Map: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MapProps) {
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
          id="memory-map"
          viewBox="0 0 22 22"
        >
          <path d="M2 4H4V3H6V2H10V3H13V4H15V3H17V2H20V18H18V19H16V20H12V19H9V18H7V19H5V20H2V4M4 6V17H6V16H7V5H5V6H4M12 5H9V16H10V17H13V6H12V5M16 6H15V17H17V16H18V5H16V6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Map;
