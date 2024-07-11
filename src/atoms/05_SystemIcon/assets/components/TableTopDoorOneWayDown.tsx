/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorOneWayDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorOneWayDownProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorOneWayDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorOneWayDownProps) {
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
          id="memory-table-top-door-one-way-down"
          viewBox="0 0 22 22"
        >
          <path d="M22 12H0V10H4V6H18V10H22M12 20H10V19H9V18H8V17H7V16H10V13H12V16H15V17H14V18H13V19H12M16 11V8H6V11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorOneWayDown;
