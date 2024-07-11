/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedAllProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedAllProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedAll: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedAllProps) {
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
          id="memory-box-outer-light-dashed-all"
          viewBox="0 0 22 22"
        >
          <path d="M4 0V2H2V4H0V0H4M2 6V10H0V6H2M2 12V16H0V12H2M2 18V20H4V22H0V18H2M6 0H10V2H6V0M12 0H16V2H12V0M18 0H22V4H20V2H18V0M18 22V20H20V18H22V22H18M16 22H12V20H16V22M10 22H6V20H10V22M20 6H22V10H20V6M20 12H22V16H20V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedAll;
