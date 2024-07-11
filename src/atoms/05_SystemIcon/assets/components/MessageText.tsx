/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MessageTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MessageTextProps & React.SVGProps<SVGSVGElement>>;

const MessageText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MessageTextProps) {
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
          id="memory-message-text"
          viewBox="0 0 22 22"
        >
          <path d="M2 1H20V2H21V16H20V17H5V18H4V19H3V20H2V21H1V2H2V1M3 3V16H4V15H19V3H3M5 6H17V8H5V6M5 10H14V12H5V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MessageText;
