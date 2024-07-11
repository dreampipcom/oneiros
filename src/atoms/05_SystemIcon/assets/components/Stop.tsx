/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface StopProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<StopProps & React.SVGProps<SVGSVGElement>>;

const Stop: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: StopProps) {
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
          id="memory-stop"
          viewBox="0 0 22 22"
        >
          <path d="M16 5V6H17V16H16V17H6V16H5V6H6V5H16M7 7V15H15V7H7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Stop;
