/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TridentProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TridentProps & React.SVGProps<SVGSVGElement>>;

const Trident: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TridentProps) {
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
          id="memory-trident"
          viewBox="0 0 22 22"
        >
          <path d="M6 18H4V16H5V15H6V14H7V13H8V12H9V11H10V10H11V5H12V4H13V3H14V2H16V3H15V4H14V5H13V7H14V6H15V5H16V4H18V6H17V7H16V8H15V9H17V8H18V7H19V6H20V8H19V9H18V10H17V11H12V12H11V13H10V14H9V15H8V16H7V17H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Trident;
