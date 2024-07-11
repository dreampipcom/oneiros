/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MessageProcessingProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  MessageProcessingProps & React.SVGProps<SVGSVGElement>
>;

const MessageProcessing: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MessageProcessingProps) {
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
          id="memory-message-processing"
          viewBox="0 0 22 22"
        >
          <path d="M2 1H20V2H21V16H20V17H5V18H4V19H3V20H2V21H1V2H2V1M4 15H19V3H3V16H4V15M6 8H8V10H6V8M10 8H12V10H10V8M14 8H16V10H14V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MessageProcessing;
