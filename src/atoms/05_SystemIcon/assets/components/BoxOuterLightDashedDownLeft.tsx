/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-dashed-down-left
import React from 'react';

interface BoxOuterLightDashedDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedDownLeftProps) {
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
          id="memory-box-outer-light-dashed-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M0 18H2V20H4V22H0V18M6 20H10V22H6V20M12 20H16V22H12V20M18 20H21V22H18V20M0 16V12H2V16H0M0 10V7H2V10H0M0 5V1H2V5H0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedDownLeft;
