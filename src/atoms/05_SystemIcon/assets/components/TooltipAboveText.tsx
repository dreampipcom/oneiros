/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/tooltip-above-text
import React from 'react';

interface TooltipAboveTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipAboveTextProps & React.SVGProps<SVGSVGElement>
>;

const TooltipAboveText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipAboveTextProps) {
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
          id="memory-tooltip-above-text"
          viewBox="0 0 22 22"
        >
          <path d="M2 1H20V2H21V16H20V17H15V18H14V19H13V20H12V21H10V20H9V19H8V18H7V17H2V16H1V2H2V1M3 3V15H8V16H9V17H10V18H12V17H13V16H14V15H19V3H3M5 6H17V8H5V6M5 10H15V12H5V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipAboveText;
