/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface QuarterstaffProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<QuarterstaffProps & React.SVGProps<SVGSVGElement>>;

const Quarterstaff: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: QuarterstaffProps) {
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
          id="memory-quarterstaff"
          viewBox="0 0 22 22"
        >
          <path d="M4 20H3V19H2V18H3V17H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11V9H12V8H13V7H14V6H15V5H16V4H17V3H18V2H19V3H20V4H19V5H18V6H17V7H16V8H15V9H14V10H13V11H12V12H11V13H10V14H9V15H8V16H7V17H6V18H5V19H4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Quarterstaff;
