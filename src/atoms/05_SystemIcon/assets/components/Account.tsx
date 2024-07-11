/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AccountProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AccountProps & React.SVGProps<SVGSVGElement>>;

const Account: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AccountProps) {
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
          id="memory-account"
          viewBox="0 0 22 22"
        >
          <path d="M9 3H13V4H14V5H15V9H14V10H13V11H9V10H8V9H7V5H8V4H9V3M10 8V9H12V8H13V6H12V5H10V6H9V8H10M7 12H15V13H17V14H18V15H19V19H3V15H4V14H5V13H7V12M6 16H5V17H17V16H16V15H14V14H8V15H6V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Account;
