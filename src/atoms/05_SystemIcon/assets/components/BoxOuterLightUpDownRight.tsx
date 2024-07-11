/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightUpDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightUpDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightUpDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightUpDownRightProps) {
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
          id="memory-box-outer-light-up-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M22 0V22H0V20H20V2H0V0H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightUpDownRight;
