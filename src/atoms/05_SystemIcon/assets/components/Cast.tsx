/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CastProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CastProps & React.SVGProps<SVGSVGElement>>;

const Cast: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CastProps) {
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
          id="memory-cast"
          viewBox="0 0 22 22"
        >
          <path d="M5 19H2V16H4V17H5M8 19H6V16H5V15H2V13H5V14H7V16H8M11 19H9V15H8V13H6V12H2V10H6V11H8V12H9V13H10V15H11M19 19H13V17H18V5H4V8H2V4H3V3H19V4H20V18H19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Cast;
