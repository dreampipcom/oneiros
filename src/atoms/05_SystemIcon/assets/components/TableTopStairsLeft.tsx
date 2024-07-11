/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopStairsLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopStairsLeftProps & React.SVGProps<SVGSVGElement>
>;

const TableTopStairsLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopStairsLeftProps) {
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
          id="memory-table-top-stairs-left"
          viewBox="0 0 22 22"
        >
          <path d="M20 15H18V7H20M16 16H14V6H16M12 17H10V5H12M8 18H6V4H8M4 19H2V3H4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopStairsLeft;
