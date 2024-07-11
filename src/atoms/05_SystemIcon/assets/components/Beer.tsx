/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BeerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BeerProps & React.SVGProps<SVGSVGElement>>;

const Beer: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BeerProps) {
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
          id="memory-beer"
          viewBox="0 0 22 22"
        >
          <path d="M9 15H7V8H9M12 15H10V8H12M15 19H4V3H15V7H18V8H19V16H18V17H15M17 15V9H15V15M13 17V6H6V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Beer;
