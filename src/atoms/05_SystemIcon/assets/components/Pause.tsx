/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PauseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PauseProps & React.SVGProps<SVGSVGElement>>;

const Pause: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PauseProps) {
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
          id="memory-pause"
          viewBox="0 0 22 22"
        >
          <path d="M6 4H9V18H6V4M13 18V4H16V18H13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Pause;
