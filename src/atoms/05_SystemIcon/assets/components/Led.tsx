/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LedProps & React.SVGProps<SVGSVGElement>>;

const Led: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LedProps) {
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
          id="memory-led"
          viewBox="0 0 22 22"
        >
          <path d="M8 21V15H4V13H6V6H7V4H8V3H9V2H13V3H14V4H15V6H16V13H18V15H14V21H12V15H10V21H8M12 5V4H10V5H9V7H8V13H9V12H13V13H14V7H13V5H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Led;
