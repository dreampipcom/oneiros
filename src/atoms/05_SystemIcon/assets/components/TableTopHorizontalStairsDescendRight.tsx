/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopHorizontalStairsDescendRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopHorizontalStairsDescendRightProps & React.SVGProps<SVGSVGElement>
>;

const TableTopHorizontalStairsDescendRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopHorizontalStairsDescendRightProps) {
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
          id="memory-table-top-horizontal-stairs-descend-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 2H10V0H12M21 15H19V7H21M18 16H16V6H18M15 17H13V5H15M12 18H10V4H12M12 22H10V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopHorizontalStairsDescendRight;
