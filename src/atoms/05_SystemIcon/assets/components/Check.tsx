/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckProps & React.SVGProps<SVGSVGElement>>;

const Check: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckProps) {
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
          id="memory-check"
          viewBox="0 0 22 22"
        >
          <path d="M4 11H6V12H7V13H8V14H10V13H11V12H12V11H13V10H14V9H15V8H16V7H17V6H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H11V16H10V17H8V16H7V15H6V14H5V13H4V11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Check;
