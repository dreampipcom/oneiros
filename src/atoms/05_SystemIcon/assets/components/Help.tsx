/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface HelpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<HelpProps & React.SVGProps<SVGSVGElement>>;

const Help: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: HelpProps) {
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
          id="memory-help"
          viewBox="0 0 22 22"
        >
          <path d="M12 15H10V12H11V11H12V10H13V9H14V6H13V5H9V6H8V9H6V5H7V4H8V3H14V4H15V5H16V10H15V11H14V12H13V13H12M12 19H10V17H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Help;
