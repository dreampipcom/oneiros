/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BellProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BellProps & React.SVGProps<SVGSVGElement>>;

const Bell: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BellProps) {
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
          id="memory-bell"
          viewBox="0 0 22 22"
        >
          <path d="M19 17H3V16H4V15H5V7H6V6H7V5H9V4H10V2H12V4H13V5H15V6H16V7H17V15H18V16H19M12 20H10V19H9V18H13V19H12M15 15V8H14V7H13V6H9V7H8V8H7V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Bell;
