/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/table-top-horizontal-rotate-counterclockwise
import React from 'react';

interface TableTopHorizontalRotateCounterclockwiseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopHorizontalRotateCounterclockwiseProps & React.SVGProps<SVGSVGElement>
>;

const TableTopHorizontalRotateCounterclockwise: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopHorizontalRotateCounterclockwiseProps) {
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
          id="memory-table-top-horizontal-rotate-counterclockwise"
          viewBox="0 0 22 22"
        >
          <path d="M18 8H16V7H15V6H13V5H11V8H10V7H9V6H8V5H7V3H8V2H9V1H10V0H11V3H14V4H16V5H17V6H18M2 12H0V10H2M9 12H3V10H9M12 12H10V10H12M19 12H13V10H19M22 12H20V10H22M14 19H8V18H6V17H5V16H4V14H6V15H7V16H9V17H13V16H15V15H16V14H18V16H17V17H16V18H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopHorizontalRotateCounterclockwise;
