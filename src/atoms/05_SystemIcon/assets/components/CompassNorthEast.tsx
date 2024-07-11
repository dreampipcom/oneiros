/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassNorthEastProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassNorthEastProps & React.SVGProps<SVGSVGElement>
>;

const CompassNorthEast: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassNorthEastProps) {
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
          id="memory-compass-north-east"
          viewBox="0 0 22 22"
        >
          <path d="M4 6H6V7.5H7V10H8V6H10V16H8V14H7V12H6V16H4M12 6H18V8H14V10H18V12H14V14H18V16H12" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassNorthEast;
