/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AxeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AxeProps & React.SVGProps<SVGSVGElement>>;

const Axe: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AxeProps) {
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
          id="memory-axe"
          viewBox="0 0 22 22"
        >
          <path d="M11 3H13V4H14V5H15V6H17V7H19V8H20V9H21V11H20V13H19V14H18V15H16V16H15V15H14V14H13V12H12V11H11V10H10V9H9V8H8V6H9V5H10V4H11M10 10V11H11V13H10V14H9V15H8V16H7V17H6V18H5V19H4V20H3V19H2V17H3V16H4V15H5V14H6V13H7V12H8V11H9V10" />
        </svg>
      </g>
    </svg>
  );
};

export default Axe;
