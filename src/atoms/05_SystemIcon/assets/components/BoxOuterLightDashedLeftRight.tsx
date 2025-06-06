/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-dashed-left-right
import React from 'react';

interface BoxOuterLightDashedLeftRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedLeftRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedLeftRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedLeftRightProps) {
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
          id="memory-box-outer-light-dashed-left-right"
          viewBox="0 0 22 22"
        >
          <path d="M20 21V17H22V21H20M20 15V12H22V15H20M20 10V6H22V10H20M20 4V1H22V4H20M0 21V17H2V21H0M0 15V12H2V15H0M0 10V6H2V10H0M0 4V1H2V4H0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedLeftRight;
