/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BagPersonalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BagPersonalProps & React.SVGProps<SVGSVGElement>>;

const BagPersonal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BagPersonalProps) {
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
          id="memory-bag-personal"
          viewBox="0 0 22 22"
        >
          <path d="M17 15H9V17H7V15H5V19H17V15M17 9H16V8H15V7H7V8H6V9H5V13H17V9M13 11H9V10H10V9H12V10H13V11M3 8H4V6H6V5H7V2H8V1H14V2H15V5H16V6H18V8H19V20H18V21H4V20H3V8M9 3V5H13V3H9Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BagPersonal;
