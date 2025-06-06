/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-spiral-stairs-right
import React from 'react';

interface TableTopSpiralStairsRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopSpiralStairsRightProps & React.SVGProps<SVGSVGElement>
>;

const TableTopSpiralStairsRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopSpiralStairsRightProps) {
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
          id="memory-table-top-spiral-stairs-right"
          viewBox="0 0 22 22"
        >
          <path d="M7 4H6V3H7M9 4H8V3H9M2 4H3V3H2M3 5H4V4H3M9 6H8V5H9M2 6H3V5H2M4 6H5V5H4M3 7H4V6H3M5 7H6V6H5M2 8H3V7H2M4 8H5V7H4M6 8H7V7H6M3 9H4V8H3M5 9H6V8H5M7 9H8V8H7M9 9H10V2H3V3H4V4H5V5H6V6H7V7H8V8H9M2 10H3V9H2M4 10H5V9H4M6 10H7V9H6M8 10H9V9H8M11 10H12V9H13V8H14V7H15V6H16V5H17V4H18V3H19V2H11M19 19H20V11H12V12H13V13H14V14H15V15H16V16H17V17H18V18H19M22 22H0V20H2V12H0V0H22M20 10V3H19V4H18V5H17V6H16V7H15V8H14V9H13V10M5 20V12H3V20M8 20V12H6V20M11 20V12H9V20M19 20V19H18V18H17V17H16V16H15V15H14V14H13V13H12V20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopSpiralStairsRight;
