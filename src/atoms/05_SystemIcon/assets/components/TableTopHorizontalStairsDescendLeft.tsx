/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopHorizontalStairsDescendLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopHorizontalStairsDescendLeftProps & React.SVGProps<SVGSVGElement>
>;

const TableTopHorizontalStairsDescendLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopHorizontalStairsDescendLeftProps) {
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
          id="memory-table-top-horizontal-stairs-descend-left"
          viewBox="0 0 22 22"
        >
          <path d="M12 2H10V0H12M3 15H1V7H3M6 16H4V6H6M9 17H7V5H9M12 18H10V4H12M12 22H10V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopHorizontalStairsDescendLeft;
