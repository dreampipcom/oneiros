/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BugProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BugProps & React.SVGProps<SVGSVGElement>>;

const Bug: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BugProps) {
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
          id="memory-bug"
          viewBox="0 0 22 22"
        >
          <path d="M3 7H6V6H7V5H8V4H7V3H6V2H7V1H8V2H9V3H10V4H12V3H13V2H14V1H15V2H16V3H15V4H14V5H15V6H16V7H19V9H17V11H19V13H17V15H19V17H16V18H15V19H14V20H8V19H7V18H6V17H3V15H5V13H3V11H5V9H3V7M13 18V17H14V16H15V8H14V7H13V6H9V7H8V8H7V16H8V17H9V18H13M9 13H13V15H9V13M9 9H13V11H9V9Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Bug;
