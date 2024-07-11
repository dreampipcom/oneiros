/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ScimitarProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ScimitarProps & React.SVGProps<SVGSVGElement>>;

const Scimitar: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ScimitarProps) {
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
          id="memory-scimitar"
          viewBox="0 0 22 22"
        >
          <path d="M10 19H9V18H8V17H7V18H6V19H4V17H5V16H6V15H5V14H4V13H5V12H6V13H7V14H8V13H9V12H10V11H11V10H12V9H13V7H14V4H13V3H16V4H17V8H16V10H15V11H14V12H13V13H12V14H10V15H9V16H10V17H11V18H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Scimitar;
