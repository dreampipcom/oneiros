/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalMenuLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalMenuLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalMenuLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalMenuLeftProps) {
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
          id="memory-box-light-vertical-menu-left"
          viewBox="0 0 22 22"
        >
          <path d="M14 13H15V9H14V10H13V12H14M17 17H15V16H14V15H13V14H12V13H11V12H10V10H11V9H12V8H13V7H14V6H15V5H17M12 22H10V16H9V15H8V14H7V13H6V12H5V10H6V9H7V8H8V7H9V6H10V0H12V7H11V8H10V9H9V10H8V12H9V13H10V14H11V15H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalMenuLeft;
