/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface HelpBoxFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<HelpBoxFillProps & React.SVGProps<SVGSVGElement>>;

const HelpBoxFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: HelpBoxFillProps) {
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
          id="memory-help-box-fill"
          viewBox="0 0 22 22"
        >
          <path d="M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M12 13V12H13V11H14V7H13V6H9V7H8V10H10V8H12V10H11V11H10V13M12 16V14H10V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default HelpBoxFill;
