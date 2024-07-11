/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDashedUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDashedUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDashedUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDashedUpRightProps) {
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
          id="memory-box-light-dashed-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M0 10H2V12H0V10M4 10H7V12H4V10M9 10H12V13H10V12H9V10M10 22V20H12V22H10M10 18V15H12V18H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDashedUpRight;
