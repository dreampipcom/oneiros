/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChatProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChatProps & React.SVGProps<SVGSVGElement>>;

const Chat: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChatProps) {
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
          id="memory-chat"
          viewBox="0 0 22 22"
        >
          <path d="M6 20H1V18H2V17H3V16H4V14H3V8H4V7H5V6H6V5H8V4H16V5H18V6H19V7H20V8H21V14H20V15H19V16H18V17H16V18H8V19H6M6 18V17H7V16H15V15H17V14H18V13H19V9H18V8H17V7H15V6H9V7H7V8H6V9H5V13H6V16H5V17H4V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Chat;
