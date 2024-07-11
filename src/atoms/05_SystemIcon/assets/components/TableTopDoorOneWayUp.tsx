/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorOneWayUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorOneWayUpProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorOneWayUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorOneWayUpProps) {
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
          id="memory-table-top-door-one-way-up"
          viewBox="0 0 22 22"
        >
          <path d="M12 9H10V6H7V5H8V4H9V3H10V2H12V3H13V4H14V5H15V6H12M18 16H4V12H0V10H22V12H18M16 14V11H6V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorOneWayUp;
