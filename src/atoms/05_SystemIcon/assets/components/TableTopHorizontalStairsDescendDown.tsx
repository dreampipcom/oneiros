/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopHorizontalStairsDescendDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopHorizontalStairsDescendDownProps & React.SVGProps<SVGSVGElement>
>;

const TableTopHorizontalStairsDescendDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopHorizontalStairsDescendDownProps) {
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
          id="memory-table-top-horizontal-stairs-descend-down"
          viewBox="0 0 22 22"
        >
          <path d="M2 12H0V10H2M18 12H4V10H18M22 12H20V10H22M17 15H5V13H17M16 18H6V16H16M15 21H7V19H15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopHorizontalStairsDescendDown;
