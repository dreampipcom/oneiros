/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface GlaiveProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<GlaiveProps & React.SVGProps<SVGSVGElement>>;

const Glaive: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: GlaiveProps) {
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
          id="memory-glaive"
          viewBox="0 0 22 22"
        >
          <path d="M5 18H3V16H4V15H5V14H6V13H7V12H8V11H9V10H10V9H9V8H10V7H11V8H12V7H14V6H15V5H16V3H17V2H18V7H17V8H16V9H13V10H14V11H13V12H12V11H11V12H10V13H9V14H8V15H7V16H6V17H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Glaive;
