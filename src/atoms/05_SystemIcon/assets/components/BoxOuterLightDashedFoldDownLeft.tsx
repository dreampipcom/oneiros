/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-dashed-fold-down-left
import React from 'react';

interface BoxOuterLightDashedFoldDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedFoldDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedFoldDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedFoldDownLeftProps) {
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
          id="memory-box-outer-light-dashed-fold-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M8 4H4V2H8M14 4H10V2H14M2 6H1V5H0V1H2V4H3V5H2M20 6H18V4H16V2H20M7 10H5V9H4V8H3V6H5V7H6V8H7M20 12H18V8H20M11 15H10V14H9V13H8V12H7V11H8V10H9V11H10V12H11V13H12V14H11M20 18H18V14H20M16 19H14V18H13V17H12V15H14V16H15V17H16M21 22H17V21H16V20H17V19H18V20H21Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedFoldDownLeft;
