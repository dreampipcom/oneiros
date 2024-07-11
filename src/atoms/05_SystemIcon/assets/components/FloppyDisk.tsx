/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FloppyDiskProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FloppyDiskProps & React.SVGProps<SVGSVGElement>>;

const FloppyDisk: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FloppyDiskProps) {
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
          id="memory-floppy-disk"
          viewBox="0 0 22 22"
        >
          <path d="M2 3H3V2H16V3H17V4H18V5H19V6H20V19H19V20H3V19H2V3M18 7H17V6H16V5H15V9H6V4H4V18H6V13H16V18H18V7M11 4V7H13V4H11M14 18V15H8V18H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FloppyDisk;
