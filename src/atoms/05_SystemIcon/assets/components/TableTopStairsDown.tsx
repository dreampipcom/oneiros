/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopStairsDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopStairsDownProps & React.SVGProps<SVGSVGElement>
>;

const TableTopStairsDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopStairsDownProps) {
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
          id="memory-table-top-stairs-down"
          viewBox="0 0 22 22"
        >
          <path d="M15 4H7V2H15M16 8H6V6H16M17 12H5V10H17M18 16H4V14H18M19 20H3V18H19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopStairsDown;
