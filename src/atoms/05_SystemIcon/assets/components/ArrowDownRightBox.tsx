/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ArrowDownRightBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  ArrowDownRightBoxProps & React.SVGProps<SVGSVGElement>
>;

const ArrowDownRightBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowDownRightBoxProps) {
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
          id="memory-arrow-down-right-box"
          viewBox="0 0 22 22"
        >
          <path d="M15 15H8V13H11V12H10V11H9V10H8V9H7V8H8V7H9V8H10V9H11V10H12V11H13V8H15M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M17 18V17H18V5H17V4H5V5H4V17H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowDownRightBox;
