/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipAboveProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TooltipAboveProps & React.SVGProps<SVGSVGElement>>;

const TooltipAbove: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipAboveProps) {
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
          id="memory-tooltip-above"
          viewBox="0 0 22 22"
        >
          <path d="M2 1H20V2H21V16H20V17H15V18H14V19H13V20H12V21H10V20H9V19H8V18H7V17H2V16H1V2H2V1M3 3V15H8V16H9V17H10V18H12V17H13V16H14V15H19V3H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipAbove;
