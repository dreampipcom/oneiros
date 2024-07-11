/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightHorizontalMenuDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightHorizontalMenuDownProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightHorizontalMenuDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightHorizontalMenuDownProps) {
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
          id="memory-box-light-horizontal-menu-down"
          viewBox="0 0 22 22"
        >
          <path d="M12 12H10V11H9V10H8V9H7V8H6V7H5V5H17V7H16V8H15V9H14V10H13V11H12M12 17H10V16H9V15H8V14H7V13H6V12H0V10H7V11H8V12H9V13H10V14H12V13H13V12H14V11H15V10H22V12H16V13H15V14H14V15H13V16H12M12 9V8H13V7H9V8H10V9Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightHorizontalMenuDown;
