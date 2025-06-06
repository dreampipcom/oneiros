/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-dashed-fold-up-right
import React from 'react';

interface BoxOuterLightDashedFoldUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedFoldUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedFoldUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedFoldUpRightProps) {
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
          id="memory-box-outer-light-dashed-fold-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M5 3H4V2H1V0H5V1H6V2H5M10 7H8V6H7V5H6V3H8V4H9V5H10M4 8H2V4H4M14 12H13V11H12V10H11V9H10V8H11V7H12V8H13V9H14V10H15V11H14M4 14H2V10H4M19 16H17V15H16V14H15V12H17V13H18V14H19M6 20H2V16H4V18H6M12 20H8V18H12M18 20H14V18H18M22 21H20V18H19V17H20V16H21V17H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedFoldUpRight;
