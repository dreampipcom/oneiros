/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopVerticalStairsAscendUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopVerticalStairsAscendUpProps & React.SVGProps<SVGSVGElement>
>;

const TableTopVerticalStairsAscendUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopVerticalStairsAscendUpProps) {
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
          id="memory-table-top-vertical-stairs-ascend-up"
          viewBox="0 0 22 22"
        >
          <path d="M20 3H2V1H20M19 6H3V4H19M18 9H4V7H18M2 12H0V10H2M17 12H5V10H17M22 12H20V10H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopVerticalStairsAscendUp;
