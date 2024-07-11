/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassSouthArrowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassSouthArrowProps & React.SVGProps<SVGSVGElement>
>;

const CompassSouthArrow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassSouthArrowProps) {
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
          id="memory-compass-south-arrow"
          viewBox="0 0 22 22"
        >
          <path d="M10 6H12V5H13V4H14V3H15V2H16V0H14V1H13V2H12V3H10V2H9V1H8V0H6V2H7V3H8V4H9V5H10M9 8H14V10H10V12H13V13H14V17H13V18H8V16H12V14H9V13H8V9H9" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassSouthArrow;
