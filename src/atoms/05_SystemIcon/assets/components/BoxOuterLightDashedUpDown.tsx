/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedUpDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedUpDownProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedUpDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedUpDownProps) {
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
          id="memory-box-outer-light-dashed-up-down"
          viewBox="0 0 22 22"
        >
          <path d="M21 2H17V0H21V2M15 2H12V0H15V2M10 2H6V0H10V2M4 2H1V0H4V2M21 22H17V20H21V22M15 22H12V20H15V22M10 22H6V20H10V22M4 22H1V20H4V22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedUpDown;
