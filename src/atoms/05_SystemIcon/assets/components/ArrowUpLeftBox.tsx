/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowUpLeftBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowUpLeftBoxProps & React.SVGProps<SVGSVGElement>>;

const ArrowUpLeftBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowUpLeftBoxProps) {
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
          id="memory-arrow-up-left-box"
          viewBox="0 0 22 22"
        >
          <path d="M14 15H13V14H12V13H11V12H10V11H9V14H7V7H14V9H11V10H12V11H13V12H14V13H15V14H14M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M17 18V17H18V5H17V4H5V5H4V17H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowUpLeftBox;
