/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/tooltip-below-text
import React from 'react';

interface TooltipBelowTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TooltipBelowTextProps & React.SVGProps<SVGSVGElement>
>;

const TooltipBelowText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TooltipBelowTextProps) {
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
          id="memory-tooltip-below-text"
          viewBox="0 0 22 22"
        >
          <path d="M2 21H20V20H21V6H20V5H15V4H14V3H13V2H12V1H10V2H9V3H8V4H7V5H2V6H1V20H2V21M3 19V7H8V6H9V5H10V4H12V5H13V6H14V7H19V19H3M5 16H15V14H5V16M5 12H17V10H5V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TooltipBelowText;
