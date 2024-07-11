/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface WallFrontDamagedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  WallFrontDamagedProps & React.SVGProps<SVGSVGElement>
>;

const WallFrontDamaged: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WallFrontDamagedProps) {
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
          id="memory-wall-front-damaged"
          viewBox="0 0 22 22"
        >
          <path d="M4 16H5V14H6V13H7V12H8V11H10V10H15V11H16V13H17V15H18V8H4M20 18H16V16H15V14H14V12H11V13H9V14H8V15H7V17H6V18H2V4H4V6H6V4H8V6H10V4H12V6H14V4H16V6H18V4H20M11 20H6V19H7V18H10V19H11M16 20H12V18H13V17H14V18H15V19H16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default WallFrontDamaged;
