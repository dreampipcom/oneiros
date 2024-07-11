/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopVerticalRotateClockwiseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopVerticalRotateClockwiseProps & React.SVGProps<SVGSVGElement>
>;

const TableTopVerticalRotateClockwise: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopVerticalRotateClockwiseProps) {
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
          id="memory-table-top-vertical-rotate-clockwise"
          viewBox="0 0 22 22"
        >
          <path d="M12 2H10V0H12M12 9H10V3H12M12 12H10V10H12M19 15H17V14H16V13H15V12H14V11H17V9H16V7H15V6H14V4H16V5H17V6H18V8H19V11H22V12H21V13H20V14H19M8 18H6V17H5V16H4V14H3V8H4V6H5V5H6V4H8V6H7V7H6V9H5V13H6V15H7V16H8M12 19H10V13H12M12 22H10V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopVerticalRotateClockwise;
