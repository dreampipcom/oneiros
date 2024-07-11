/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChevronUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChevronUpProps & React.SVGProps<SVGSVGElement>>;

const ChevronUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChevronUpProps) {
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
          id="memory-chevron-up"
          viewBox="0 0 22 22"
        >
          <path d="M6 12H5V13H4V15H6V14H7V13H8V12H9V11H10V10H12V11H13V12H14V13H15V14H16V15H18V13H17V12H16V11H15V10H14V9H13V8H12V7H10V8H9V9H8V10H7V11H6" />
        </svg>
      </g>
    </svg>
  );
};

export default ChevronUp;
