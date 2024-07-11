/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightRoundUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundUpRightProps) {
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
          id="memory-box-light-round-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M0 10H4V11H7V12H8V13H9V14H10V15H11V18H12V22H10V19H9V16H8V15H7V14H6V13H3V12H0V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundUpRight;
