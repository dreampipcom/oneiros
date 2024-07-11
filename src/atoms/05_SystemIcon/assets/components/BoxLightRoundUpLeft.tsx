/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpLeftProps) {
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
          id="memory-box-light-round-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M10 22V18H11V15H12V14H13V13H14V12H15V11H18V10H22V12H19V13H16V14H15V15H14V16H13V19H12V22H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpLeft;
