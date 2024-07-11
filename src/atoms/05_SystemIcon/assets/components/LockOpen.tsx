/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LockOpenProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LockOpenProps & React.SVGProps<SVGSVGElement>>;

const LockOpen: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LockOpenProps) {
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
          id="memory-lock-open"
          viewBox="0 0 22 22"
        >
          <path d="M10 13H12V14H13V16H12V17H10V16H9V14H10V13M14 2V3H15V4H16V9H17V10H18V20H17V21H5V20H4V10H5V9H14V5H13V4H9V5H8V7H6V4H7V3H8V2H14M16 11H6V19H16V11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default LockOpen;
