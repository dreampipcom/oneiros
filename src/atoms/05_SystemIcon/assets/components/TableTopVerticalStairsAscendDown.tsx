/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopVerticalStairsAscendDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopVerticalStairsAscendDownProps & React.SVGProps<SVGSVGElement>
>;

const TableTopVerticalStairsAscendDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopVerticalStairsAscendDownProps) {
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
          id="memory-table-top-vertical-stairs-ascend-down"
          viewBox="0 0 22 22"
        >
          <path d="M2 12H0V10H2M17 12H5V10H17M22 12H20V10H22M18 15H4V13H18M19 18H3V16H19M20 21H2V19H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopVerticalStairsAscendDown;
