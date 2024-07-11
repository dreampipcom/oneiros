/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CompassEastArrowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassEastArrowProps & React.SVGProps<SVGSVGElement>
>;

const CompassEastArrow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassEastArrowProps) {
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
          id="memory-compass-east-arrow"
          viewBox="0 0 22 22"
        >
          <path d="M6 10V12H5V13H4V14H3V15H2V16H0V14H1V13H2V12H3V10H2V9H1V8H0V6H2V7H3V8H4V9H5V10M10 6H16V8H12V10H16V12H12V14H16V16H10" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassEastArrow;
