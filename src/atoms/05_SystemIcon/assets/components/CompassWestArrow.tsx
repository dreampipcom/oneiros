/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassWestArrowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassWestArrowProps & React.SVGProps<SVGSVGElement>
>;

const CompassWestArrow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassWestArrowProps) {
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
          id="memory-compass-west-arrow"
          viewBox="0 0 22 22"
        >
          <path d="M4 6H6V12H7V13H8V8H10V13H11V12H12V6H14V13H13V15H12V16H10V15H8V16H6V15H5V13H4M16 10V12H17V13H18V14H19V15H20V16H22V14H21V13H20V12H19V10H20V9H21V8H22V6H20V7H19V8H18V9H17V10" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassWestArrow;
