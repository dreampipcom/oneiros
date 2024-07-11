/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDownRightProps) {
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
          id="memory-box-outer-light-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M0 22V20H20V0H22V22H0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDownRight;
