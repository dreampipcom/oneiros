/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowTopRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowTopRightProps & React.SVGProps<SVGSVGElement>>;

const ArrowTopRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowTopRightProps) {
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
          id="memory-arrow-top-right"
          viewBox="0 0 22 22"
        >
          <path d="M8 5H17V14H15V9H14V10H13V11H12V12H11V13H10V14H9V15L8 15V16H7V15H6V14L7 14V13H8V12H9V11H10V10H11V9H12V8H13V7H8V5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowTopRight;
