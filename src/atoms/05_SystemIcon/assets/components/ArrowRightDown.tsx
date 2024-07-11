/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowRightDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowRightDownProps & React.SVGProps<SVGSVGElement>>;

const ArrowRightDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowRightDownProps) {
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
          id="memory-arrow-right-down"
          viewBox="0 0 22 22"
        >
          <path d="M12 19H14V18H15V17H16V16H17V15H18V13H16V14H15V15H14V11H13V9H12V8H10V7H3V9H9V10H11V12H12V15H11V14H10V13H8V15H9V16H10V17H11V18H12" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowRightDown;
