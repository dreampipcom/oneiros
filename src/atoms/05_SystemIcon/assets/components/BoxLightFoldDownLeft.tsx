/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightFoldDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightFoldDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightFoldDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightFoldDownLeftProps) {
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
          id="memory-box-light-fold-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M18 9H19V3H13V4H14V5H15V6H16V7H17V8H18M22 12H19V11H18V10H17V9H16V8H15V7H14V6H13V5H12V4H11V3H10V0H12V1H21V10H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightFoldDownLeft;
