/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArchiveProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArchiveProps & React.SVGProps<SVGSVGElement>>;

const Archive: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArchiveProps) {
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
          id="memory-archive"
          viewBox="0 0 22 22"
        >
          <path d="M2 2H20V8H19V20H3V8H2V2M17 18V8H5V18H17M4 4V6H18V4H4M7 10H15V12H7V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Archive;
