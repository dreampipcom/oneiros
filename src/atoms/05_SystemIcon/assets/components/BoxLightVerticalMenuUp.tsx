/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalMenuUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalMenuUpProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalMenuUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalMenuUpProps) {
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
          id="memory-box-light-vertical-menu-up"
          viewBox="0 0 22 22"
        >
          <path d="M12 5H10V0H12M17 14H5V12H6V11H7V10H8V9H9V8H10V7H12V8H13V9H14V10H15V11H16V12H17M12 22H10V16H12M13 12V11H12V10H10V11H9V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalMenuUp;
