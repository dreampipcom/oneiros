/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TooltipEndAlertProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipEndAlertProps & React.SVGProps<SVGSVGElement>
>;

const TooltipEndAlert: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipEndAlertProps) {
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
          id="memory-tooltip-end-alert"
          viewBox="0 0 22 22"
        >
          <path d="M14 15H12V13H14V15M14 12H12V7H14V12M21 2V20H20V21H6V20H5V15H4V14H3V13H2V12H1V10H2V9H3V8H4V7H5V2H6V1H20V2H21M19 3H7V8H6V9H5V10H4V12H5V13H6V14H7V19H19V3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipEndAlert;
