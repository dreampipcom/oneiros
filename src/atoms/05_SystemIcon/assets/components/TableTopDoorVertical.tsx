/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorVerticalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorVerticalProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorVertical: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorVerticalProps) {
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
          id="memory-table-top-door-vertical"
          viewBox="0 0 22 22"
        >
          <path d="M12 22H10V18H7V4H10V0H12V4H15V18H12M13 16V6H9V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorVertical;
