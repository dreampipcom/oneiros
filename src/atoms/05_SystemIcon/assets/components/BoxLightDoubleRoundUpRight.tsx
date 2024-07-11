/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleRoundUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleRoundUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleRoundUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleRoundUpRightProps) {
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
          id="memory-box-light-double-round-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 22V19H11V17H10V15H9V14H8V13H7V12H5V11H3V10H0V8H4V9H6V10H8V11H9V12H10V13H11V14H12V16H13V18H14V22H12M0 12H2V13H5V14H6V15H7V16H8V17H9V20H10V22H8V21H7V18H6V17H5V16H4V15H1V14H0V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleRoundUpRight;
