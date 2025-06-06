/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-spiral-stairs-left
import React from 'react';

interface TableTopSpiralStairsLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopSpiralStairsLeftProps & React.SVGProps<SVGSVGElement>
>;

const TableTopSpiralStairsLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopSpiralStairsLeftProps) {
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
          id="memory-table-top-spiral-stairs-left"
          viewBox="0 0 22 22"
        >
          <path d="M9 9H10V2H3V3H4V4H5V5H6V6H7V7H8V8H9M13 13H14V12H13M15 13H16V12H15M17 13H18V12H17M19 13H20V12H19M14 14H15V13H14M16 14H17V13H16M18 14H19V13H18M15 15H16V14H15M17 15H18V14H17M19 15H20V14H19M14 17H13V16H14M16 16H17V15H16M18 16H19V15H18M17 17H18V16H17M19 17H20V16H19M14 19H13V18H14M16 19H15V18H16M18 18H19V17H18M2 19H3V18H4V17H5V16H6V15H7V14H8V13H9V12H2M19 19H20V18H19M22 22H0V0H22V2H20V10H22M13 10V2H11V10M16 10V2H14V10M19 10V2H17V10M10 11V10H9V9H8V8H7V7H6V6H5V5H4V4H3V3H2V11M11 20V12H10V13H9V14H8V15H7V16H6V17H5V18H4V19H3V20M19 20V19H18V18H17V17H16V16H15V15H14V14H13V13H12V20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopSpiralStairsLeft;
