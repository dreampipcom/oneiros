/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedDownLeftRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedDownLeftRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedDownLeftRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedDownLeftRightProps) {
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
          id="memory-box-outer-light-dashed-down-left-right"
          viewBox="0 0 22 22"
        >
          <path d="M0 18H2V20H4V22H0V18M6 20H10V22H6V20M12 20H16V22H12V20M18 20H20V18H22V22H18V20M0 16V12H2V16H0M0 10V7H2V10H0M0 5V1H2V5H0M22 1V5H20V1H22M22 7V10H20V7H22M22 12V16H20V12H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedDownLeftRight;
