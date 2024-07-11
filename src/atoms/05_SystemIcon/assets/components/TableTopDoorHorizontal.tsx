/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorHorizontalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorHorizontalProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorHorizontal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorHorizontalProps) {
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
          id="memory-table-top-door-horizontal"
          viewBox="0 0 22 22"
        >
          <path d="M18 15H4V12H0V10H4V7H18V10H22V12H18M16 13V9H6V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorHorizontal;
