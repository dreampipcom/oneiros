/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-spiral-stairs-round-right
import React from 'react';

interface TableTopSpiralStairsRoundRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopSpiralStairsRoundRightProps & React.SVGProps<SVGSVGElement>
>;

const TableTopSpiralStairsRoundRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopSpiralStairsRoundRightProps) {
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
          id="memory-table-top-spiral-stairs-round-right"
          viewBox="0 0 22 22"
        >
          <path d="M9 6H8V5H7V4H8V5H9M4 6H5V5H4M3 7H4V6H3M5 7H6V6H5M4 8H5V7H4M6 8H7V7H6M3 9H4V8H3M5 9H6V8H5M7 9H8V8H7M9 9H10V2H8V3H6V4H5V5H6V6H7V7H8V8H9M2 10H3V9H2M4 10H5V9H4M6 10H7V9H6M8 10H9V9H8M11 10H12V9H13V8H14V7H15V6H16V5H17V4H16V3H14V2H11M17 17H18V16H19V14H20V11H12V12H13V13H14V14H15V15H16V16H17M14 22H0V20H2V12H0V8H1V5H2V4H3V3H4V2H5V1H8V0H14V1H17V2H18V3H19V4H20V5H21V8H22V14H21V17H20V18H19V19H18V20H17V21H14M20 10V8H19V6H18V5H17V6H16V7H15V8H14V9H13V10M5 20V12H3V20M8 20V12H6V20M11 20V12H9V20M14 20V19H16V18H17V17H16V16H15V15H14V14H13V13H12V20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopSpiralStairsRoundRight;
