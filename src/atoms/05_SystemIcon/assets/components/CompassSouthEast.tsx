/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassSouthEastProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassSouthEastProps & React.SVGProps<SVGSVGElement>
>;

const CompassSouthEast: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassSouthEastProps) {
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
          id="memory-compass-south-east"
          viewBox="0 0 22 22"
        >
          <path d="M5 6H10V8H6V10H9V11H10V15H9V16H4V14H8V12H5V11H4V7H5M12 6H18V8H14V10H18V12H14V14H18V16H12" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassSouthEast;
