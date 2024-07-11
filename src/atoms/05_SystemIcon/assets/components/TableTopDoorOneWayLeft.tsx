/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorOneWayLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorOneWayLeftProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorOneWayLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorOneWayLeftProps) {
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
          id="memory-table-top-door-one-way-left"
          viewBox="0 0 22 22"
        >
          <path d="M6 15H5V14H4V13H3V12H2V10H3V9H4V8H5V7H6V10H9V12H6M12 22H10V0H12V4H16V18H12M14 16V6H11V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorOneWayLeft;
