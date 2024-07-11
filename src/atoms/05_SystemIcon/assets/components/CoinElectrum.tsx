/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CoinElectrumProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CoinElectrumProps & React.SVGProps<SVGSVGElement>>;

const CoinElectrum: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CoinElectrumProps) {
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
          id="memory-coin-electrum"
          viewBox="0 0 22 22"
        >
          <path d="M17,19H5V18H4V16H3V14H2V8H3V6H4V4H5V3H17V4H18V6H19V8H20V14H19V16H18V18H17ZM12,16V14H10V16ZM16,17V15H17V12H18V10H17V7H16V5H6V7H5V10H4V12H5V15H6V17H9V16H8V14H9V13H10V12H12V13H13V14H14V16H13V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CoinElectrum;
