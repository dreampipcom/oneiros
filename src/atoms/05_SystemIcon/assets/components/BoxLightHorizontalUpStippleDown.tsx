/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-horizontal-up-stipple-down
import React from 'react';

interface BoxLightHorizontalUpStippleDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightHorizontalUpStippleDownProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightHorizontalUpStippleDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightHorizontalUpStippleDownProps) {
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
          id="memory-box-light-horizontal-up-stipple-down"
          viewBox="0 0 22 22"
        >
          <path d="M22 12H0V10H10V0H12V10H22M3 15H4V14H3M7 15H8V14H7M13 15H14V14H13M17 15H18V14H17M22 16H21V15H20V14H19V15H18V16H17V15H16V14H15V15H14V16H13V15H12V14H11V15H10V14H9V15H8V16H7V15H6V14H5V15H4V16H3V15H2V14H1V15H0V14H1V13H2V14H3V13H4V14H5V13H6V14H7V13H8V14H9V13H10V14H11V13H12V14H13V13H14V14H15V13H16V14H17V13H18V14H19V13H20V14H21V13H22V14H21V15H22M2 17H1V16H2M6 17H5V16H6M11 17H10V16H11M16 17H15V16H16M20 17H19V16H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightHorizontalUpStippleDown;
