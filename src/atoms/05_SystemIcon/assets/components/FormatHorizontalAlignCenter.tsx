/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatHorizontalAlignCenterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatHorizontalAlignCenterProps & React.SVGProps<SVGSVGElement>
>;

const FormatHorizontalAlignCenter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatHorizontalAlignCenterProps) {
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
          id="memory-format-horizontal-align-center"
          viewBox="0 0 22 22"
        >
          <path d="M6 15H5V12H2V10H5V7H6V8H7V9H8V10H9V12H8V13H7V14H6M17 15H16V14H15V13H14V12H13V10H14V9H15V8H16V7H17V10H20V12H17M12 18H10V4H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatHorizontalAlignCenter;
