/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundUpLeftStippleInnerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpLeftStippleInnerProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpLeftStippleInner: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpLeftStippleInnerProps) {
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
          id="memory-box-light-round-up-left-stipple-inner"
          viewBox="0 0 22 22"
        >
          <path d="M18 16H19V15H18M21 18H20V17H21M15 19H16V18H15M18 21H17V20H18M12 22H10V18H11V15H12V14H13V13H14V12H15V11H18V10H22V12H19V13H16V14H15V15H14V16H13V19H12M14 22H13V21H14V20H15V19H14V18H15V17H16V16H17V15H18V14H19V15H20V14H21V13H22V14H21V15H20V16H19V17H18V16H17V17H16V18H17V19H16V20H15V21H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpLeftStippleInner;
