/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedUpDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedUpDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedUpDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedUpDownRightProps) {
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
          id="memory-box-outer-light-dashed-up-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M18 22V20H20V18H22V22H18M20 16V12H22V16H20M20 10V6H22V10H20M20 4V2H18V0H22V4H20M16 22H12V20H16V22M10 22H7V20H10V22M5 22H1V20H5V22M1 0H5V2H1V0M7 0H10V2H7V0M12 0H16V2H12V0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedUpDownRight;
