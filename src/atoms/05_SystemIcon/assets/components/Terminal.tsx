/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TerminalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TerminalProps & React.SVGProps<SVGSVGElement>>;

const Terminal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TerminalProps) {
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
          id="memory-terminal"
          viewBox="0 0 22 22"
        >
          <path d="M20 3V19H19V20H3V19H2V3H3V2H19V3H20M18 6H4V18H18V6M9 9V10H10V11H11V13H10V14H9V15H8V16H6V14H7V13H8V11H7V10H6V8H8V9H9M11 16V14H16V16H11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Terminal;
