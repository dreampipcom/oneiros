/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CloseOutlineProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CloseOutlineProps & React.SVGProps<SVGSVGElement>>;

const CloseOutline: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CloseOutlineProps) {
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
          id="memory-close-outline"
          viewBox="0 0 22 22"
        >
          <path d="M15 17H16V16H17V15H16V14H15V13H14V12H13V10H14V9H15V8H16V7H17V6H16V5H15V6H14V7H13V8H12V9H10V8H9V7H8V6H7V5H6V6H5V7H6V8H7V9H8V10H9V12H8V13H7V14H6V15H5V16H6V17H7V16H8V15H9V14H10V13H12V14H13V15H14V16H15M17 19H14V18H13V17H12V16H10V17H9V18H8V19H5V18H4V17H3V14H4V13H5V12H6V10H5V9H4V8H3V5H4V4H5V3H8V4H9V5H10V6H12V5H13V4H14V3H17V4H18V5H19V8H18V9H17V10H16V12H17V13H18V14H19V17H18V18H17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CloseOutline;
