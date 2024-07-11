/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CheckerboardProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckerboardProps & React.SVGProps<SVGSVGElement>>;

const Checkerboard: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckerboardProps) {
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
          id="memory-checkerboard"
          viewBox="0 0 22 22"
        >
          <path d="M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M11 7V4H7V7M18 7V5H17V4H15V7M7 11V7H4V11M15 11V7H11V11M11 15V11H7V15M18 15V11H15V15M7 18V15H4V17H5V18M15 18V15H11V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Checkerboard;
