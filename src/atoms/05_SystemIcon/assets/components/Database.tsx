/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DatabaseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DatabaseProps & React.SVGProps<SVGSVGElement>>;

const Database: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DatabaseProps) {
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
          id="memory-database"
          viewBox="0 0 22 22"
        >
          <path d="M7 2H15V3H17V4H18V5H19V17H18V18H17V19H15V20H7V19H5V18H4V17H3V5H4V4H5V3H7V2M8 16V15H6V14H5V16H6V17H8V18H14V17H16V16H17V14H16V15H14V16H8M8 11V10H6V9H5V12H7V13H9V14H13V13H15V12H17V9H16V10H14V11H8M9 8V9H13V8H15V7H17V6H16V5H14V4H8V5H6V6H5V7H7V8H9Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Database;
