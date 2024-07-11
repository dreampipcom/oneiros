/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DownloadProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DownloadProps & React.SVGProps<SVGSVGElement>>;

const Download: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DownloadProps) {
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
          id="memory-download"
          viewBox="0 0 22 22"
        >
          <path d="M18 17V19H4V17H18M14 2V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H10V14H9V13H8V12H7V11H6V10H5V9H4V8H8V2H14M12 4H10V10H9V11H10V12H12V11H13V10H12V4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Download;
