/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalMenuRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalMenuRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalMenuRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalMenuRightProps) {
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
          id="memory-box-light-vertical-menu-right"
          viewBox="0 0 22 22"
        >
          <path d="M7,13H8V12H9V10H8V9H7ZM7,17H5V5H7V6H8V7H9V8H10V9H11V10H12V12H11V13H10V14H9V15H8V16H7ZM12,22H10V15H11V14H12V13H13V12H14V10H13V9H12V8H11V7H10V0H12V6H13V7H14V8H15V9H16V10H17V12H16V13H15V14H14V15H13V16H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalMenuRight;
