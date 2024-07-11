/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface EmailProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<EmailProps & React.SVGProps<SVGSVGElement>>;

const Email: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: EmailProps) {
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
          id="memory-email"
          viewBox="0 0 22 22"
        >
          <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Email;
