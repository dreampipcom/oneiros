/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/tooltip-below-help
import React from 'react';

interface TooltipBelowHelpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipBelowHelpProps & React.SVGProps<SVGSVGElement>
>;

const TooltipBelowHelp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipBelowHelpProps) {
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
          id="memory-tooltip-below-help"
          viewBox="0 0 22 22"
        >
          <path d="M12 14H10V12H11V11H12V10H10V11H8V9H9V8H13V9H14V12H13V13H12M12 17H10V15H12M20 21H2V20H1V6H2V5H7V4H8V3H9V2H10V1H12V2H13V3H14V4H15V5H20V6H21V20H20M19 19V7H14V6H13V5H12V4H10V5H9V6H8V7H3V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipBelowHelp;
