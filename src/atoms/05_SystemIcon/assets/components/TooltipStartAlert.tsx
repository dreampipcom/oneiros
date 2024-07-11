/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipStartAlertProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipStartAlertProps & React.SVGProps<SVGSVGElement>
>;

const TooltipStartAlert: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipStartAlertProps) {
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
          id="memory-tooltip-start-alert"
          viewBox="0 0 22 22"
        >
          <path d="M8 15H10V13H8V15M8 12H10V7H8V12M1 2V20H2V21H16V20H17V15H18V14H19V13H20V12H21V10H20V9H19V8H18V7H17V2H16V1H2V2H1M3 3H15V8H16V9H17V10H18V12H17V13H16V14H15V19H3V3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipStartAlert;
