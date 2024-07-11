/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WeightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WeightProps & React.SVGProps<SVGSVGElement>>;

const Weight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WeightProps) {
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
          id="memory-weight"
          viewBox="0 0 22 22"
        >
          <path d="M20,20H2V18H3V14H4V11H5V8H8V7H7V4H8V3H9V2H13V3H14V4H15V7H14V8H17V11H18V14H19V18H20ZM12,7V6H13V5H12V4H10V5H9V6H10V7ZM17,18V16H16V12H15V10H7V12H6V16H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Weight;
