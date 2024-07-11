/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipStartHelpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipStartHelpProps & React.SVGProps<SVGSVGElement>
>;

const TooltipStartHelp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipStartHelpProps) {
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
          id="memory-tooltip-start-help"
          viewBox="0 0 22 22"
        >
          <path d="M10 13H8V11H9V10H10V8H8V10H6V7H7V6H11V7H12V11H11V12H10M10 16H8V14H10M16 21H2V20H1V2H2V1H16V2H17V7H18V8H19V9H20V10H21V12H20V13H19V14H18V15H17V20H16M15 19V14H16V13H17V12H18V10H17V9H16V8H15V3H3V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipStartHelp;
