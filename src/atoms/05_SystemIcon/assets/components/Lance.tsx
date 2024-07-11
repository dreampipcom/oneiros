/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LanceProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LanceProps & React.SVGProps<SVGSVGElement>>;

const Lance: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LanceProps) {
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
          id="memory-lance"
          viewBox="0 0 22 22"
        >
          <path d="M5 19H3V17H4V16H5V15H6V14H5V13H6V12H7V11H9V10H10V9H11V8H13V7H14V6H15V5H16V4H18V3H19V4H18V6H17V7H16V8H15V9H14V11H13V12H12V13H11V15H10V16H9V17H8V16H7V17H6V18H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Lance;
