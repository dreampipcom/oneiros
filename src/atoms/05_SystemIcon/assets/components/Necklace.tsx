/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface NecklaceProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<NecklaceProps & React.SVGProps<SVGSVGElement>>;

const Necklace: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: NecklaceProps) {
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
          id="memory-necklace"
          viewBox="0 0 22 22"
        >
          <path d="M9 17H10V16H12V17H13V19H12V20H10V19H9V17M10 15V14H9V13H8.09V12H7V10H6V8H5V6H4V3H5V2H17V3H18V6H17V8H16V10H15V12H14V13H13V14H12V15H10M7 5V7H8V9H9V11H10.09V12H12V11H13V9H14V7H15V5H16V4H6V5H7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Necklace;
