/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightUpRightCircleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightUpRightCircleProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightUpRightCircle: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightUpRightCircleProps) {
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
          id="memory-box-light-up-right-circle"
          viewBox="0 0 22 22"
        >
          <path d="M9 7H13V8H14V9H15V13H14V14H13V15H12V22H10V15H9V14H8V13H7V12H0V10H7V9H8V8H9V7M13 10H12V9H10V10H9V12H10V13H12V12H13V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightUpRightCircle;
