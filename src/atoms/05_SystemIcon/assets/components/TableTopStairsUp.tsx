/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopStairsUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopStairsUpProps & React.SVGProps<SVGSVGElement>
>;

const TableTopStairsUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopStairsUpProps) {
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
          id="memory-table-top-stairs-up"
          viewBox="0 0 22 22"
        >
          <path d="M19 4H3V2H19M18 8H4V6H18M17 12H5V10H17M16 16H6V14H16M15 20H7V18H15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopStairsUp;
