/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CoinCopperProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CoinCopperProps & React.SVGProps<SVGSVGElement>>;

const CoinCopper: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CoinCopperProps) {
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
          id="memory-coin-copper"
          viewBox="0 0 22 22"
        >
          <path d="M12,14H10V13H9V12H8V10H9V9H10V8H12V9H13V10H14V12H13V13H12ZM15,19H7V18H6V17H5V16H4V15H3V7H4V6H5V5H6V4H7V3H15V4H16V5H17V6H18V7H19V15H18V16H17V17H16V18H15ZM12,12V10H10V12ZM14,17V16H15V15H16V14H17V8H16V7H15V6H14V5H8V6H7V7H6V8H5V14H6V15H7V16H8V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CoinCopper;
