/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ClipboardProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ClipboardProps & React.SVGProps<SVGSVGElement>>;

const Clipboard: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ClipboardProps) {
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
          id="memory-clipboard"
          viewBox="0 0 22 22"
        >
          <path d="M2 5H3V4H7V2H9V1H13V2H15V4H19V5H20V20H19V21H3V20H2V5M10 3V5H12V3H10M18 6H16V8H6V6H4V19H18V6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Clipboard;
