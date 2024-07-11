/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopVerticalRotateCounterclockwiseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopVerticalRotateCounterclockwiseProps & React.SVGProps<SVGSVGElement>
>;

const TableTopVerticalRotateCounterclockwise: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopVerticalRotateCounterclockwiseProps) {
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
          id="memory-table-top-vertical-rotate-counterclockwise"
          viewBox="0 0 22 22"
        >
          <path d="M12 2H10V0H12M12 9H10V3H12M12 12H10V10H12M5 15H3V14H2V13H1V12H0V11H3V8H4V6H5V5H6V4H8V6H7V7H6V9H5V11H8V12H7V13H6V14H5M16 18H14V16H15V15H16V13H17V9H16V7H15V6H14V4H16V5H17V6H18V8H19V14H18V16H17V17H16M12 19H10V13H12M12 22H10V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopVerticalRotateCounterclockwise;
