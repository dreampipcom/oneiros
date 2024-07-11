/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowDownProps & React.SVGProps<SVGSVGElement>>;

const ArrowDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowDownProps) {
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
          id="memory-arrow-down"
          viewBox="0 0 22 22"
        >
          <path d="M12 17H10V16H9V15H8V14H7V13H6V11H8V12H9V13H10V4H12V13H13V12H14V11H16V13H15V14H14V15H13V16H12" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowDown;
