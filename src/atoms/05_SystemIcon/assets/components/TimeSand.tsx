/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TimeSandProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TimeSandProps & React.SVGProps<SVGSVGElement>>;

const TimeSand: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TimeSandProps) {
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
          id="memory-time-sand"
          viewBox="0 0 22 22"
        >
          <path d="M11 8H12V7H11M9 10H10V9H11V8H10V7H9V6H10V7H11V6H12V7H13V8H14V7H15V5H16V4H6V5H7V6H8V8H9M10 11H11V10H10M11 12H12V11H11M19 20H3V17H4V16H5V14H6V12H7V10H6V8H5V6H4V5H3V2H19V5H18V6H17V8H16V10H15V12H16V14H17V16H18V17H19M13 10V8H12V9H11V10M16 18V17H15V15H14V13H13V12H12V14H13V16H14V17H8V16H9V14H10V13H11V12H9V13H8V15H7V17H6V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TimeSand;
