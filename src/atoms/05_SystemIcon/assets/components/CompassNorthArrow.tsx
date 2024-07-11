/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassNorthArrowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassNorthArrowProps & React.SVGProps<SVGSVGElement>
>;

const CompassNorthArrow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassNorthArrowProps) {
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
          id="memory-compass-north-arrow"
          viewBox="0 0 22 22"
        >
          <path d="M8 4H10V5.5H11V8H12V4H14V14H12V12H11V10H10V14H8M10 17V16H12V17H13V18H14V19H15V20H16V22H14V21H13V20H12V19H10V20H9V21H8V22H6V20H7V19H8V18H9V17" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassNorthArrow;
