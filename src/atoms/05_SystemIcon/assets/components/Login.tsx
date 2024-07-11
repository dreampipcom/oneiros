/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LoginProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LoginProps & React.SVGProps<SVGSVGElement>>;

const Login: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LoginProps) {
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
          id="memory-login"
          viewBox="0 0 22 22"
        >
          <path d="M5 1H17V2H18V20H17V21H5V20H4V14H6V19H16V3H6V8H4V2H5V1M8 6H10V7H11V8H12V9H13V10H14V12H13V13H12V14H11V15H10V16H8V14H9V13H10V12H2V10H10V9H9V8H8V6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Login;
