/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-up-down
import React from 'react';

interface ArrowUpDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowUpDownProps & React.SVGProps<SVGSVGElement>>;

const ArrowUpDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowUpDownProps) {
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
          id="memory-arrow-up-down"
          viewBox="0 0 22 22"
        >
          <path d="M10 3H12V4H13V5H14V6H15V7H16V9H14V8H13V7H12V15H13V14H14V13H16V15H15V16H14V17H13V18H12V19H10V18H9V17H8V16H7V15H6V13H8V14H9V15H10V7H9V8H8V9H6V7H7V6H8V5H9V4H10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowUpDown;
