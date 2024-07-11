/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipEndProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TooltipEndProps & React.SVGProps<SVGSVGElement>>;

const TooltipEnd: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipEndProps) {
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
          id="memory-tooltip-end"
          viewBox="0 0 22 22"
        >
          <path d="M21 20V2H20V1H6V2H5V7H4V8H3V9H2V10H1V12H2V13H3V14H4V15H5V20H6V21H20V20H21M19 19H7V14H6V13H5V12H4V10H5V9H6V8H7V3H19V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipEnd;
