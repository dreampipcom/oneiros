/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BarcodeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BarcodeProps & React.SVGProps<SVGSVGElement>>;

const Barcode: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BarcodeProps) {
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
          id="memory-barcode"
          viewBox="0 0 22 22"
        >
          <path d="M4 17H2V5H4M6 17H5V5H6M10 17H7V5H10M12 17H11V5H12M15 17H13V5H15M17 17H16V5H17M20 17H18V5H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Barcode;
