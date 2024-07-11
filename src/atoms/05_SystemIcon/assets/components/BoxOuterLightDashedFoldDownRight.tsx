/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedFoldDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedFoldDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedFoldDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedFoldDownRightProps) {
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
          id="memory-box-outer-light-dashed-fold-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 4H8V2H12M18 4H14V2H18M4 6H2V2H6V4H4M21 6H20V5H19V4H20V1H22V5H21M17 10H15V8H16V7H17V6H19V8H18V9H17M4 12H2V8H4M12 15H11V14H10V13H11V12H12V11H13V10H14V11H15V12H14V13H13V14H12M4 18H2V14H4M8 19H6V17H7V16H8V15H10V17H9V18H8M5 22H1V20H4V19H5V20H6V21H5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedFoldDownRight;
