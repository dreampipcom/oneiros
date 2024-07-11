/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassSouthWestProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassSouthWestProps & React.SVGProps<SVGSVGElement>
>;

const CompassSouthWest: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassSouthWestProps) {
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
          id="memory-compass-south-west"
          viewBox="0 0 22 22"
        >
          <path d="M3 6H8V8H4V10H7V11H8V15H7V16H2V14H6V12H3V11H2V7H3M10 6H12V12H13V13H14V8H16V13H17V12H18V6H20V13H19V15H18V16H16V15H14V16H12V15H11V13H10" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassSouthWest;
