/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WaterFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WaterFillProps & React.SVGProps<SVGSVGElement>>;

const WaterFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WaterFillProps) {
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
          id="memory-water-fill"
          viewBox="0 0 22 22"
        >
          <path d="M14,21H8V20H6V19H5V18H4V16H3V13H4V11H5V9H6V7H7V6H8V4H9V3H10V1H12V3H13V4H14V6H15V7H16V9H17V11H18V13H19V16H18V18H17V19H16V20H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default WaterFill;
