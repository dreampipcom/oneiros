/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/message-user
import React from 'react';

interface MessageUserProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MessageUserProps & React.SVGProps<SVGSVGElement>>;

const MessageUser: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MessageUserProps) {
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
          id="memory-message-user"
          viewBox="0 0 22 22"
        >
          <path d="M12 9H10V8H9V6H10V5H12V6H13V8H12M15 13H7V11H8V10H14V11H15M3 16H4V15H19V3H3M2 21H1V2H2V1H20V2H21V16H20V17H5V18H4V19H3V20H2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MessageUser;
