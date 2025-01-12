/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-up-down-stipple
import React from 'react';

interface BoxOuterLightUpDownStippleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightUpDownStippleProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightUpDownStipple: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightUpDownStippleProps) {
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
          id="memory-box-outer-light-up-down-stipple"
          viewBox="0 0 22 22"
        >
          <path d="M22 2H0V0H22M3 5H4V4H3M7 5H8V4H7M13 5H14V4H13M17 5H18V4H17M22 6H21V5H20V4H19V5H18V6H17V5H16V4H15V5H14V6H13V5H12V4H11V5H10V4H9V5H8V6H7V5H6V4H5V5H4V6H3V5H2V4H1V5H0V4H1V3H2V4H3V3H4V4H5V3H6V4H7V3H8V4H9V3H10V4H11V3H12V4H13V3H14V4H15V3H16V4H17V3H18V4H19V3H20V4H21V3H22V4H21V5H22M2 7H1V6H2M6 7H5V6H6M11 7H10V6H11M16 7H15V6H16M20 7H19V6H20M3 16H2V15H3M7 16H6V15H7M12 16H11V15H12M17 16H16V15H17M21 16H20V15H21M4 18H5V17H4M8 18H9V17H8M14 18H15V17H14M18 18H19V17H18M21 19H20V18H19V19H18V18H17V19H16V18H15V19H14V18H13V19H12V18H11V19H10V18H9V19H8V18H7V19H6V18H5V19H4V18H3V19H2V18H1V19H0V18H1V17H0V16H1V17H2V18H3V17H4V16H5V17H6V18H7V17H8V16H9V17H10V18H11V17H12V18H13V17H14V16H15V17H16V18H17V17H18V16H19V17H20V18H21V17H22V18H21M22 22H0V20H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightUpDownStipple;
