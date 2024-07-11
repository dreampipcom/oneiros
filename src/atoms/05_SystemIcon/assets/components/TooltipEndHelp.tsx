/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipEndHelpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TooltipEndHelpProps & React.SVGProps<SVGSVGElement>>;

const TooltipEndHelp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipEndHelpProps) {
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
          id="memory-tooltip-end-help"
          viewBox="0 0 22 22"
        >
          <path d="M14 13H12V11H13V10H14V8H12V10H10V7H11V6H15V7H16V11H15V12H14M14 16H12V14H14M20 21H6V20H5V15H4V14H3V13H2V12H1V10H2V9H3V8H4V7H5V2H6V1H20V2H21V20H20M19 19V3H7V8H6V9H5V10H4V12H5V13H6V14H7V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipEndHelp;
