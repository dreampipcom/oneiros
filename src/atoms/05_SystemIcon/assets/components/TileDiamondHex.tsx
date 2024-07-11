/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TileDiamondHexProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TileDiamondHexProps & React.SVGProps<SVGSVGElement>>;

const TileDiamondHex: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TileDiamondHexProps) {
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
          id="memory-tile-diamond-hex"
          viewBox="0 0 22 22"
        >
          <path d="M12 22H10V18H9V17H8V16H7V15H6V14H5V13H4V12H0V10H4V9H5V8H6V7H7V6H8V5H9V4H10V0H12V4H13V5H14V6H15V7H16V8H17V9H18V10H22V12H18V13H17V14H16V15H15V16H14V17H13V18H12M12 16V15H13V14H14V13H15V12H16V10H15V9H14V8H13V7H12V6H10V7H9V8H8V9H7V10H6V12H7V13H8V14H9V15H10V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TileDiamondHex;
