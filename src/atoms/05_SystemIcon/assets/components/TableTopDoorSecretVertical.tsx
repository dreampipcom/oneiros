/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorSecretVerticalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorSecretVerticalProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorSecretVertical: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorSecretVerticalProps) {
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
          id="memory-table-top-door-secret-vertical"
          viewBox="0 0 22 22"
        >
          <path d="M13 16H8V14H12V12H9V11H8V7H9V6H14V8H10V10H13V11H14V15H13M12 22H10V19H6V18H5V6H6V4H7V3H10V0H12V3H16V4H17V16H16V18H14V19H12M14 17V16H15V5H8V6H7V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorSecretVertical;
