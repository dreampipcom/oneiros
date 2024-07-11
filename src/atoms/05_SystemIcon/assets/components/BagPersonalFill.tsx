/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BagPersonalFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BagPersonalFillProps & React.SVGProps<SVGSVGElement>
>;

const BagPersonalFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BagPersonalFillProps) {
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
          id="memory-bag-personal-fill"
          viewBox="0 0 22 22"
        >
          <path d="M3 8H4V6H6V5H7V2H8V1H14V2H15V5H16V6H18V8H19V20H18V21H4V20H3V8M9 3V5H13V3H9M17 14H5V15H7V17H8V15H17V14M12 11H13V9H12V8H10V9H9V11H10V12H12V11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BagPersonalFill;
