/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TentProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TentProps & React.SVGProps<SVGSVGElement>>;

const Tent: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TentProps) {
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
          id="memory-tent"
          viewBox="0 0 22 22"
        >
          <path d="M19 19H3V17H10V8H9V10H8V12H7V14H6V16H3V15H4V13H5V11H6V10H7V8H8V6H9V4H10V3H12V4H13V6H14V8H15V10H16V11H17V13H18V15H19V16H16V14H15V12H14V10H13V8H12V17H19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Tent;
