/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-dashed-down-right
import React from 'react';

interface BoxOuterLightDashedDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedDownRightProps) {
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
          id="memory-box-outer-light-dashed-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M18 22V20H20V18H22V22H18M20 16V12H22V16H20M20 10V6H22V10H20M20 4V1H22V4H20M16 22H12V20H16V22M10 22H7V20H10V22M5 22H1V20H5V22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedDownRight;
