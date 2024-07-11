/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PollProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PollProps & React.SVGProps<SVGSVGElement>>;

const Poll: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PollProps) {
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
          id="memory-poll"
          viewBox="0 0 22 22"
        >
          <path d="M7 18H4V8H7M12 18H9V4H12M17 18H14V11H17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Poll;
