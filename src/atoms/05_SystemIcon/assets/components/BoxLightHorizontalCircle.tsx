/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightHorizontalCircleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightHorizontalCircleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightHorizontalCircle: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightHorizontalCircleProps) {
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
          id="memory-box-light-horizontal-circle"
          viewBox="0 0 22 22"
        >
          <path d="M13 15H9V14H8V13H7V12H0V10H7V9H8V8H9V7H13V8H14V9H15V10H22V12H15V13H14V14H13M12 13V12H13V10H12V9H10V10H9V12H10V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightHorizontalCircle;
