/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleRoundUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleRoundUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleRoundUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleRoundUpLeftProps) {
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
          id="memory-box-light-double-round-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M22 10H19V11H17V12H15V13H14V14H13V15H12V17H11V19H10V22H8V18H9V16H10V14H11V13H12V12H13V11H14V10H16V9H18V8H22V10M12 22V20H13V17H14V16H15V15H16V14H17V13H20V12H22V14H21V15H18V16H17V17H16V18H15V21H14V22H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleRoundUpLeft;
