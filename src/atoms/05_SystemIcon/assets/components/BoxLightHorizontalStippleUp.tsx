/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightHorizontalStippleUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightHorizontalStippleUpProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightHorizontalStippleUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightHorizontalStippleUpProps) {
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
          id="memory-box-light-horizontal-stipple-up"
          viewBox="0 0 22 22"
        >
          <path d="M3 6H2V5H3M7 6H6V5H7M12 6H11V5H12M17 6H16V5H17M21 6H20V5H21M4 8H5V7H4M8 8H9V7H8M14 8H15V7H14M18 8H19V7H18M21 9H20V8H19V9H18V8H17V9H16V8H15V9H14V8H13V9H12V8H11V9H10V8H9V9H8V8H7V9H6V8H5V9H4V8H3V9H2V8H1V9H0V8H1V7H0V6H1V7H2V8H3V7H4V6H5V7H6V8H7V7H8V6H9V7H10V8H11V7H12V8H13V7H14V6H15V7H16V8H17V7H18V6H19V7H20V8H21V7H22V8H21M22 12H0V10H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightHorizontalStippleUp;
