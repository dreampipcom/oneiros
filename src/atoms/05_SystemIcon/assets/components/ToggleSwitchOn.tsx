/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ToggleSwitchOnProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ToggleSwitchOnProps & React.SVGProps<SVGSVGElement>>;

const ToggleSwitchOn: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ToggleSwitchOnProps) {
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
          id="memory-toggle-switch-on"
          viewBox="0 0 22 22"
        >
          <path d="M3 5H19V6H20V7H21V15H20V16H19V17H3V16H2V15H1V7H2V6H3V5M13 8V9H12V13H13V14H17V13H18V9H17V8H13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ToggleSwitchOn;
