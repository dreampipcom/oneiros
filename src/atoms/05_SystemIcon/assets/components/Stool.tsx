/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface StoolProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<StoolProps & React.SVGProps<SVGSVGElement>>;

const Stool: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: StoolProps) {
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
          id="memory-stool"
          viewBox="0 0 22 22"
        >
          <path d="M18 19H16V17H15V13H14V9H13V8H12V19H10V8H9V9H8V13H7V17H6V19H4V17H5V13H6V9H7V8H5V6H17V8H15V9H16V13H17V17H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Stool;
