/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CastleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CastleProps & React.SVGProps<SVGSVGElement>>;

const Castle: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CastleProps) {
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
          id="memory-castle"
          viewBox="0 0 22 22"
        >
          <path d="M19 19H12V13H10V19H3V13H2V4H7V6H8V4H14V6H15V4H20V13H19M17 17V12H18V6H17V8H12V6H10V8H5V6H4V12H5V17H8V12H9V11H13V12H14V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Castle;
