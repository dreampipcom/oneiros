/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-outer-light-round-down-right
import React from 'react';

interface BoxOuterLightRoundDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightRoundDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightRoundDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightRoundDownRightProps) {
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
          id="memory-box-outer-light-round-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M0 22V20H5V19H9V18H11V17H13V16H14V15H15V14H16V13H17V11H18V9H19V5H20V0H22V6H21V10H20V12H19V14H18V15H17V16H16V17H15V18H14V19H12V20H10V21H6V22H0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightRoundDownRight;
