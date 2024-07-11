/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FilterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FilterProps & React.SVGProps<SVGSVGElement>>;

const Filter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FilterProps) {
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
          id="memory-filter"
          viewBox="0 0 22 22"
        >
          <path d="M11 17H12V10H13V9H14V8H15V7H16V5H6V7H7V8H8V9H9V10H10V16H11M14 20H11V19H10V18H9V17H8V11H7V10H6V9H5V8H4V4H5V3H17V4H18V8H17V9H16V10H15V11H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Filter;
