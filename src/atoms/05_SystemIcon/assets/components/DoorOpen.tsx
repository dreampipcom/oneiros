/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DoorOpenProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DoorOpenProps & React.SVGProps<SVGSVGElement>>;

const DoorOpen: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DoorOpenProps) {
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
          id="memory-door-open"
          viewBox="0 0 22 22"
        >
          <path d="M10 10V12H9V10H10M6 2H16V3H17V18H19V20H3V18H5V3H6V2M7 4V18H11V4H7M13 4V5H14V4H13M14 5V6H15V5H14M14 6H13V7H14V6M14 7V8H15V7H14M14 8H13V9H14V8M14 9V10H15V9H14M14 10H13V11H14V10M14 11V12H15V11H14M14 12H13V13H14V12M14 13V14H15V13H14M14 14H13V15H14V14M14 15V16H15V15H14M14 16H13V17H14V16M14 17V18H15V17H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default DoorOpen;
