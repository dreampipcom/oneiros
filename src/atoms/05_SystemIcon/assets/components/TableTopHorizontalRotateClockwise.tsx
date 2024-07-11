/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopHorizontalRotateClockwiseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopHorizontalRotateClockwiseProps & React.SVGProps<SVGSVGElement>
>;

const TableTopHorizontalRotateClockwise: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopHorizontalRotateClockwiseProps) {
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
          id="memory-table-top-horizontal-rotate-clockwise"
          viewBox="0 0 22 22"
        >
          <path d="M12 8H11V5H9V6H7V7H6V8H4V6H5V5H6V4H8V3H11V0H12V1H13V2H14V3H15V5H14V6H13V7H12M2 12H0V10H2M9 12H3V10H9M12 12H10V10H12M19 12H13V10H19M22 12H20V10H22M14 19H8V18H6V17H5V16H4V14H6V15H7V16H9V17H13V16H15V15H16V14H18V16H17V17H16V18H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopHorizontalRotateClockwise;
