/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightRoundDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightRoundDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightRoundDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightRoundDownLeftProps) {
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
          id="memory-box-outer-light-round-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M0 0H2V5H3V9H4V11H5V13H6V14H7V15H8V16H9V17H11V18H13V19H17V20H22V22H16V21H12V20H10V19H8V18H7V17H6V16H5V15H4V14H3V12H2V10H1V6H0V0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightRoundDownLeft;
