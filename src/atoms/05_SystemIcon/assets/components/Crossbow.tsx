/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CrossbowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CrossbowProps & React.SVGProps<SVGSVGElement>>;

const Crossbow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CrossbowProps) {
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
          id="memory-crossbow"
          viewBox="0 0 22 22"
        >
          <path d="M9 11H10V10H11V9H12V7H13V5H12V4H7V5H5V7H6V8H7V9H8V10H9M16 17H17V16H18V10H17V9H15V10H13V11H12V13H13V14H14V15H15V16H16M18 20H17V19H16V18H15V17H14V16H13V15H12V14H10V15H9V16H8V17H7V18H6V19H4V18H3V16H4V15H5V14H6V13H7V12H8V10H7V9H6V8H5V7H4V6H3V5H2V4H4V3H6V2H14V3H15V4H17V3H19V5H18V7H19V9H20V16H19V18H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Crossbow;
