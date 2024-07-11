/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface JavalinProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<JavalinProps & React.SVGProps<SVGSVGElement>>;

const Javalin: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: JavalinProps) {
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
          id="memory-javalin"
          viewBox="0 0 22 22"
        >
          <path d="M5 18H3V17H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11V9H12V8H13V7H12V6H14V5H15V4H17V3H18V6H17V8H16V9H15V8H14V9H13V10H12V11H11V12H10V13H9V14H8V15H7V16H6V17H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Javalin;
