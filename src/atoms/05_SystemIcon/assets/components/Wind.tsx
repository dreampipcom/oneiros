/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WindProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WindProps & React.SVGProps<SVGSVGElement>>;

const Wind: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WindProps) {
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
          id="memory-wind"
          viewBox="0 0 22 22"
        >
          <path d="M9 10H2V8H8V7H9V6H8V5H7V7H6V6H5V4H6V3H9V4H10V5H11V8H10V9H9M15 13H2V11H13V10H16V9H17V8H16V7H14V9H13V8H12V6H13V5H17V6H18V7H19V10H18V11H17V12H15M14 21H10V20H9V17H11V19H13V17H12V16H4V15H3V14H13V15H14V16H15V17H16V19H15V20H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Wind;
