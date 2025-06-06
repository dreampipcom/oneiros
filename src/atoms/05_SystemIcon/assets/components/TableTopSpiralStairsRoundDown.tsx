/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-spiral-stairs-round-down
import React from 'react';

interface TableTopSpiralStairsRoundDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopSpiralStairsRoundDownProps & React.SVGProps<SVGSVGElement>
>;

const TableTopSpiralStairsRoundDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopSpiralStairsRoundDownProps) {
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
          id="memory-table-top-spiral-stairs-round-down"
          viewBox="0 0 22 22"
        >
          <path d="M12 3H13V2H12M13 4H14V3H13M15 4H16V3H15M12 5H13V4H12M14 5H15V4H14M16 5H17V4H16M13 6H14V5H13M15 6H16V5H15M12 7H13V6H12M14 7H15V6H14M13 8H14V7H13M17 9H16V8H17V7H18V8H17M12 9H13V8H12M4 17H5V16H6V15H7V14H8V13H9V12H2V14H3V16H4M17 17H18V16H19V14H20V11H12V12H13V13H14V14H15V15H16V16H17M14 22H8V21H5V20H4V19H3V18H2V17H1V14H0V0H2V2H10V0H14V1H17V2H18V3H19V4H20V5H21V8H22V14H21V17H20V18H19V19H18V20H17V21H14M10 5V3H2V5M10 8V6H2V8M20 10V8H19V6H18V5H17V6H16V7H15V8H14V9H13V10M10 11V9H2V11M11 20V12H10V13H9V14H8V15H7V16H6V17H5V18H6V19H8V20M14 20V19H16V18H17V17H16V16H15V15H14V14H13V13H12V20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopSpiralStairsRoundDown;
