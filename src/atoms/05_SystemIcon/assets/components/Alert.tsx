/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlertProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AlertProps & React.SVGProps<SVGSVGElement>>;

const Alert: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlertProps) {
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
          id="memory-alert"
          viewBox="0 0 22 22"
        >
          <path d="M20 20H2V19H1V15H2V13H3V11H4V9H5V7H6V5H7V3H8V2H14V3H15V5H16V7H17V9H18V11H19V13H20V15H21V19H20V20M9 6H8V8H7V10H6V12H5V14H4V16H3V18H19V16H18V14H17V12H16V10H15V8H14V6H13V4H9V6M10 7H12V13H10V7M10 14H12V16H10V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Alert;
