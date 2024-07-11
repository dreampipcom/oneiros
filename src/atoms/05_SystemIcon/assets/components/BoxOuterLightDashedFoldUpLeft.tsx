/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedFoldUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedFoldUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedFoldUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedFoldUpLeftProps) {
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
          id="memory-box-outer-light-dashed-fold-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M18 3H17V2H16V1H17V0H21V2H18M14 7H12V5H13V4H14V3H16V5H15V6H14M20 8H18V4H20M9 12H8V11H7V10H8V9H9V8H10V7H11V8H12V9H11V10H10V11H9M20 14H18V10H20M5 16H3V14H4V13H5V12H7V14H6V15H5M8 20H4V18H8M14 20H10V18H14M20 20H16V18H18V16H20M2 21H0V17H1V16H2V17H3V18H2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedFoldUpLeft;
