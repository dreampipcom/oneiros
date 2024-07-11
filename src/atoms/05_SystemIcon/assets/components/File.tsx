/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FileProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FileProps & React.SVGProps<SVGSVGElement>>;

const File: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FileProps) {
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
          id="memory-file"
          viewBox="0 0 22 22"
        >
          <path d="M13 1V2H14V3H15V4H16V5H17V6H18V7H19V20H18V21H4V20H3V2H4V1H13M13 4H12V8H16V7H15V6H14V5H13V4M5 3V19H17V10H11V9H10V3H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default File;
