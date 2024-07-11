/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface KeyProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<KeyProps & React.SVGProps<SVGSVGElement>>;

const Key: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: KeyProps) {
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
          id="memory-key"
          viewBox="0 0 22 22"
        >
          <path d="M9 15H5V14H4V13H3V9H4V8H5V7H9V8H10V9H11V10H19V12H17V14H15V12H11V13H10V14H9M8 13V12H9V10H8V9H6V10H5V12H6V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Key;
