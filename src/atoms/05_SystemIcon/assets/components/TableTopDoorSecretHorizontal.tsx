/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TableTopDoorSecretHorizontalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TableTopDoorSecretHorizontalProps & React.SVGProps<SVGSVGElement>
>;

const TableTopDoorSecretHorizontal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TableTopDoorSecretHorizontalProps) {
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
          id="memory-table-top-door-secret-horizontal"
          viewBox="0 0 22 22"
        >
          <path d="M16 14H14V10H12V13H11V14H7V13H6V8H8V12H10V9H11V8H15V9H16M18 17H6V16H4V15H3V12H0V10H3V6H4V5H16V6H18V8H19V10H22V12H19V16H18M17 15V8H16V7H5V14H6V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TableTopDoorSecretHorizontal;
