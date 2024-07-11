/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LogoutProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LogoutProps & React.SVGProps<SVGSVGElement>>;

const Logout: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LogoutProps) {
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
          id="memory-logout"
          viewBox="0 0 22 22"
        >
          <path d="M17 1V2H18V6H17V5H16V3H6V19H16V17H17V16H18V20H17V21H5V20H4V2H5V1H17M13 6H15V7H16V8H17V9H18V10H19V12H18V13H17V14H16V15H15V16H13V14H14V13H15V12H8V10H15V9H14V8H13V6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Logout;
