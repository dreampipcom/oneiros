/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightVerticalHorizontalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightVerticalHorizontalProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightVerticalHorizontal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightVerticalHorizontalProps) {
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
          id="memory-box-light-vertical-horizontal"
          viewBox="0 0 22 22"
        >
          <path d="M12 22H10V12H0V10H10V0H12V10H22V12H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightVerticalHorizontal;
