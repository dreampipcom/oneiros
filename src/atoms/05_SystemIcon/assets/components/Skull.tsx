/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SkullProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SkullProps & React.SVGProps<SVGSVGElement>>;

const Skull: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SkullProps) {
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
          id="memory-skull"
          viewBox="0 0 22 22"
        >
          <path d="M6 2H8V1H14V2H16V3H17V4H18V5H19V7H20V14H19V16H18V20H17V21H5V20H4V16H3V14H2V8H3V5H4V4H5V3H6V2M15 5V4H13V3H9V4H7V5H6V6H5V9H4V13H5V15H6V19H8V17H10V19H12V17H14V19H16V15H17V13H18V8H17V6H16V5H15M7 8H10V11H7V8M12 11V8H15V11H12M10 13H12V15H10V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Skull;
