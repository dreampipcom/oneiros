/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopStairsRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopStairsRightProps & React.SVGProps<SVGSVGElement>
>;

const TableTopStairsRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopStairsRightProps) {
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
          id="memory-table-top-stairs-right"
          viewBox="0 0 22 22"
        >
          <path d="M4 15H2V7H4M8 16H6V6H8M12 17H10V5H12M16 18H14V4H16M20 19H18V3H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopStairsRight;
