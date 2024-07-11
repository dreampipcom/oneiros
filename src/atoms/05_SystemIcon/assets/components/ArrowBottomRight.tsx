/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowBottomRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  ArrowBottomRightProps & React.SVGProps<SVGSVGElement>
>;

const ArrowBottomRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowBottomRightProps) {
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
          id="memory-arrow-bottom-right"
          viewBox="0 0 22 22"
        >
          <path d="M17 8V17H8V15H13V14H12V13H11V12H10V11H9V10H8V9H7L7 8H6V7H7V6H8L8 7H9V8H10V9H11V10H12V11H13V12H14V13H15V8H17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowBottomRight;
