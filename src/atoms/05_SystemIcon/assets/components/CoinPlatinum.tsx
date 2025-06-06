/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/coin-platinum
import React from 'react';

interface CoinPlatinumProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CoinPlatinumProps & React.SVGProps<SVGSVGElement>>;

const CoinPlatinum: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CoinPlatinumProps) {
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
          id="memory-coin-platinum"
          viewBox="0 0 22 22"
        >
          <path d="M14,21H8V20H7V19H6V18H5V17H4V16H3V15H2V14H1V8H2V7H3V6H4V5H5V4H6V3H7V2H8V1H14V2H15V3H16V4H17V5H18V6H19V7H20V8H21V14H20V15H19V16H18V17H17V18H16V19H15V20H14ZM13,19V18H14V17H15V16H16V15H17V14H18V13H19V9H18V8H17V7H16V6H15V5H14V4H13V3H9V4H8V5H7V6H6V7H5V8H4V9H3V13H4V14H5V15H6V16H7V17H8V18H9V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CoinPlatinum;
