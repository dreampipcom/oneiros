/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface NotebookProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<NotebookProps & React.SVGProps<SVGSVGElement>>;

const Notebook: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: NotebookProps) {
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
          id="memory-notebook"
          viewBox="0 0 22 22"
        >
          <path d="M19 2V20H18V21H4V20H3V18H1V16H3V12H1V10H3V6H1V4H3V2H4V1H18V2H19M14 9H13V8H12V9H11V10H10V3H7V19H17V3H15V10H14V9M3 4V6H5V4H3M5 10H3V12H5V10M5 16H3V18H5V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Notebook;
