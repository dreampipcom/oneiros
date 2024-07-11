/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CloseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CloseProps & React.SVGProps<SVGSVGElement>>;

const Close: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CloseProps) {
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
          id="memory-close"
          viewBox="0 0 22 22"
        >
          <path d="M16 17H15V16H14V15H13V14H12V13H10V14H9V15H8V16H7V17H6V16H5V15H6V14H7V13H8V12H9V10H8V9H7V8H6V7H5V6H6V5H7V6H8V7H9V8H10V9H12V8H13V7H14V6H15V5H16V6H17V7H16V8H15V9H14V10H13V12H14V13H15V14H16V15H17V16H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Close;
