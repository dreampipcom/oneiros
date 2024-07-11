/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalMenuDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalMenuDownProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalMenuDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalMenuDownProps) {
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
          id="memory-box-light-vertical-menu-down"
          viewBox="0 0 22 22"
        >
          <path d="M12 6H10V0H12M12 15H10V14H9V13H8V12H7V11H6V10H5V8H17V10H16V11H15V12H14V13H13V14H12M12 22H10V17H12M12 12V11H13V10H9V11H10V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalMenuDown;
