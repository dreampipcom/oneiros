/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WhipProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WhipProps & React.SVGProps<SVGSVGElement>>;

const Whip: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WhipProps) {
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
          id="memory-whip"
          viewBox="0 0 22 22"
        >
          <path d="M14 18H11V17H10V16H9V11H10V8H11V7H15V8H16V11H15V12H14V13H12V12H13V11H14V9H12V11H11V15H12V16H13V15H15V14H16V12H17V6H16V5H15V4H12V5H11V6H10V7H9V8H8V9H7V11H6V12H5V13H4V14H3V13H2V11H3V10H4V9H5V8H6V7H7V6H8V5H9V4H10V3H12V2H16V3H17V4H18V5H19V13H18V15H17V16H16V17H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Whip;
