/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PaperclipProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PaperclipProps & React.SVGProps<SVGSVGElement>>;

const Paperclip: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PaperclipProps) {
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
          id="memory-paperclip"
          viewBox="0 0 22 22"
        >
          <path d="M15 21H8V20H7V19H6V3H7V2H8V1H12V2H13V3H14V17H13V18H10V17H9V5H11V16H12V4H11V3H9V4H8V18H9V19H14V18H15V5H17V19H16V20H15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Paperclip;
