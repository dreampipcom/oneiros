/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface HalberdProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<HalberdProps & React.SVGProps<SVGSVGElement>>;

const Halberd: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: HalberdProps) {
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
          id="memory-halberd"
          viewBox="0 0 22 22"
        >
          <path d="M5 18H3V16H4V15H5V14H6V13H7V12H8V11H9V10H10V9H11V8H12V7H11V5H13V6H14V5H15V4H16V3H17V6H16V7H15V8H17V7H19V12H18V13H17V14H13V13H12V12H13V11H14V9H13V10H12V11H11V12H10V13H9V14H8V15H7V16H6V17H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Halberd;
