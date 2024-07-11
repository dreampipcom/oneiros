/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ToggleSwitchOffProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  ToggleSwitchOffProps & React.SVGProps<SVGSVGElement>
>;

const ToggleSwitchOff: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ToggleSwitchOffProps) {
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
          id="memory-toggle-switch-off"
          viewBox="0 0 22 22"
        >
          <path d="M5 8H9V9H10V13H9V14H5V13H4V9H5V8M19 5V6H20V7H21V15H20V16H19V17H3V16H2V15H1V7H2V6H3V5H19M18 7H4V8H3V14H4V15H18V14H19V8H18V7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ToggleSwitchOff;
