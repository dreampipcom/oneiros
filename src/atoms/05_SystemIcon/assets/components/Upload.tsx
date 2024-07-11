/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface UploadProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<UploadProps & React.SVGProps<SVGSVGElement>>;

const Upload: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: UploadProps) {
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
          id="memory-upload"
          viewBox="0 0 22 22"
        >
          <path d="M18 17V19H4V17H18M8 15V9H4V8H5V7H6V6H7V5H8V4H9V3H10V2H12V3H13V4H14V5H15V6H16V7H17V8H18V9H14V15H8M10 13H12V7H13V6H12V5H10V6H9V7H10V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Upload;
