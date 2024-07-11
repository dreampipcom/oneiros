/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDownStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDownStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDownStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDownStippleProps) {
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
          id="memory-box-outer-light-down-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M3 16H2V15H3M7 16H6V15H7M12 16H11V15H12M17 16H16V15H17M21 16H20V15H21M4 18H5V17H4M8 18H9V17H8M14 18H15V17H14M18 18H19V17H18M21 19H20V18H19V19H18V18H17V19H16V18H15V19H14V18H13V19H12V18H11V19H10V18H9V19H8V18H7V19H6V18H5V19H4V18H3V19H2V18H1V19H0V18H1V17H0V16H1V17H2V18H3V17H4V16H5V17H6V18H7V17H8V16H9V17H10V18H11V17H12V18H13V17H14V16H15V17H16V18H17V17H18V16H19V17H20V18H21V17H22V18H21M22 22H0V20H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDownStipple;
