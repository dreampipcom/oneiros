/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface HelpBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<HelpBoxProps & React.SVGProps<SVGSVGElement>>;

const HelpBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: HelpBoxProps) {
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
          id="memory-help-box"
          viewBox="0 0 22 22"
        >
          <path d="M12 13H10V11H11V10H12V8H10V10H8V7H9V6H13V7H14V11H13V12H12M12 16H10V14H12M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M17 18V17H18V5H17V4H5V5H4V17H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default HelpBox;
