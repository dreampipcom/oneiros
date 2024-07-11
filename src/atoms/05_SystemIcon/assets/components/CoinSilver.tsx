/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CoinSilverProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CoinSilverProps & React.SVGProps<SVGSVGElement>>;

const CoinSilver: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CoinSilverProps) {
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
          id="memory-coin-silver"
          viewBox="0 0 22 22"
        >
          <path d="M13,11H14V9H13V7H12V5H10V7H9V9H8V11H9V10H10V9H12V10H13ZM19,19H3V18H2V16H3V14H4V12H5V10H6V8H7V6H8V4H9V3H10V2H12V3H13V4H14V6H15V8H16V10H17V12H18V14H19V16H20V18H19ZM12,13V11H10V13ZM17,17V15H16V13H15V11H14V13H13V14H12V15H10V14H9V13H8V11H7V13H6V15H5V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CoinSilver;
