/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CoinGoldProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CoinGoldProps & React.SVGProps<SVGSVGElement>>;

const CoinGold: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CoinGoldProps) {
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
          id="memory-coin-gold"
          viewBox="0 0 22 22"
        >
          <path d="M19,19H3V17H4V15H5V12H6V10H5V7H4V5H3V3H19V5H18V7H17V10H16V12H17V15H18V17H19ZM16,17V16H15V14H14V8H15V6H16V5H6V6H7V8H8V14H7V16H6V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CoinGold;
