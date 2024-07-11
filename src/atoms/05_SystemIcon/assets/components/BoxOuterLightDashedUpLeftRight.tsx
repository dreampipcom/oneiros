/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedUpLeftRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedUpLeftRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedUpLeftRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedUpLeftRightProps) {
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
          id="memory-box-outer-light-dashed-up-left-right"
          viewBox="0 0 22 22"
        >
          <path d="M22 4H20V2H18V0H22V4M16 2H12V0H16V2M10 2H6V0H10V2M4 2H2V4H0V0H4V2M22 6V10H20V6H22M22 12V15H20V12H22M22 17V21H20V17H22M0 21V17H2V21H0M0 15V12H2V15H0M0 10V6H2V10H0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedUpLeftRight;
