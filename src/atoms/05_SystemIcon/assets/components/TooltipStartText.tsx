/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipStartTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipStartTextProps & React.SVGProps<SVGSVGElement>
>;

const TooltipStartText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipStartTextProps) {
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
          id="memory-tooltip-start-text"
          viewBox="0 0 22 22"
        >
          <path d="M5 8V6H13V8H5M5 16V14H11V16H5M5 12V10H13V12H5M1 20V2H2V1H16V2H17V7H18V8H19V9H20V10H21V12H20V13H19V14H18V15H17V20H16V21H2V20H1M3 19H15V14H16V13H17V12H18V10H17V9H16V8H15V3H3V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipStartText;
