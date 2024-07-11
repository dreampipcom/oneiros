/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowRightUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowRightUpProps & React.SVGProps<SVGSVGElement>>;

const ArrowRightUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowRightUpProps) {
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
          id="memory-arrow-right-up"
          viewBox="0 0 22 22"
        >
          <path d="M12 3H14V4H15V5H16V6H17V7H18V9H16V8H15V7H14V11H13V13H12V14H10V15H3V13H9V12H11V10H12V7H11V8H10V9H8V7H9V6H10V5H11V4H12" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowRightUp;
