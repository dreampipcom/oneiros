/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-spiral-stairs-round-left
import React from 'react';

interface TableTopSpiralStairsRoundLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopSpiralStairsRoundLeftProps & React.SVGProps<SVGSVGElement>
>;

const TableTopSpiralStairsRoundLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopSpiralStairsRoundLeftProps) {
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
          id="memory-table-top-spiral-stairs-round-left"
          viewBox="0 0 22 22"
        >
          <path d="M9 9H10V2H8V3H6V4H5V5H6V6H7V7H8V8H9M13 13H14V12H13M15 13H16V12H15M17 13H18V12H17M19 13H20V12H19M14 14H15V13H14M16 14H17V13H16M18 14H19V13H18M15 15H16V14H15M17 15H18V14H17M16 16H17V15H16M18 16H19V15H18M4 17H5V16H6V15H7V14H8V13H9V12H2V14H3V16H4M15 18H14V17H13V16H14V17H15M17 17H18V16H17M14 22H8V21H5V20H4V19H3V18H2V17H1V14H0V8H1V5H2V4H3V3H4V2H5V1H8V0H22V2H20V10H22V14H21V17H20V18H19V19H18V20H17V21H14M13 10V2H11V10M16 10V2H14V10M19 10V2H17V10M10 11V10H9V9H8V8H7V7H6V6H5V5H4V6H3V8H2V11M11 20V12H10V13H9V14H8V15H7V16H6V17H5V18H6V19H8V20M14 20V19H16V18H17V17H16V16H15V15H14V14H13V13H12V20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopSpiralStairsRoundLeft;
