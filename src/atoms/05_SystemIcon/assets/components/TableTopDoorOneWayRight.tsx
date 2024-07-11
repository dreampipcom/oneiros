/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorOneWayRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorOneWayRightProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorOneWayRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorOneWayRightProps) {
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
          id="memory-table-top-door-one-way-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 15H16V12H13V10H16V7H17V8H18V9H19V10H20V12H19V13H18V14H17M12 22H10V18H6V4H10V0H12M11 16V6H8V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorOneWayRight;
