/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WallProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WallProps & React.SVGProps<SVGSVGElement>>;

const Wall: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WallProps) {
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
          id="memory-wall"
          viewBox="0 0 22 22"
        >
          <path d="M19,20H4V15H1V7H4V2H19V7H21V15H19ZM12,7V4H6V7ZM17,7V4H14V7ZM8,13V9H3V13ZM19,13V9H10V13ZM11,18V15H6V18ZM17,18V15H13V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Wall;
