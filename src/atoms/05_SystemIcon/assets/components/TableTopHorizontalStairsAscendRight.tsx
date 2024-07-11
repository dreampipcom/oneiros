/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopHorizontalStairsAscendRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopHorizontalStairsAscendRightProps & React.SVGProps<SVGSVGElement>
>;

const TableTopHorizontalStairsAscendRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopHorizontalStairsAscendRightProps) {
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
          id="memory-table-top-horizontal-stairs-ascend-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 2H10V0H12M12 17H10V5H12M15 18H13V4H15M18 19H16V3H18M21 20H19V2H21M12 22H10V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopHorizontalStairsAscendRight;
