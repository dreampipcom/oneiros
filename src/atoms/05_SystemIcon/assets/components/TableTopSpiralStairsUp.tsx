/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-spiral-stairs-up
import React from 'react';

interface TableTopSpiralStairsUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopSpiralStairsUpProps & React.SVGProps<SVGSVGElement>
>;

const TableTopSpiralStairsUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopSpiralStairsUpProps) {
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
          id="memory-table-top-spiral-stairs-up"
          viewBox="0 0 22 22"
        >
          <path d="M9 9H10V2H3V3H4V4H5V5H6V6H7V7H8V8H9M11 10H12V9H13V8H14V7H15V6H16V5H17V4H18V3H19V2H11M4 14H3V13H4M6 14H5V13H6M9 14H10V13H9M4 16H3V15H4M8 15H9V14H8M7 16H8V15H7M9 16H10V15H9M6 17H7V16H6M8 17H9V16H8M5 18H6V17H5M7 18H8V17H7M9 18H10V17H9M2 19H3V18H4V17H5V16H6V15H7V14H8V13H9V12H2M4 19H5V18H4M6 19H7V18H6M8 19H9V18H8M3 20H4V19H3M5 20H6V19H5M7 20H8V19H7M9 20H10V19H9M22 22H20V20H12V22H0V0H22M20 10V3H19V4H18V5H17V6H16V7H15V8H14V9H13V10M10 11V10H9V9H8V8H7V7H6V6H5V5H4V4H3V3H2V11M20 13V11H12V13M20 16V14H12V16M20 19V17H12V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopSpiralStairsUp;
