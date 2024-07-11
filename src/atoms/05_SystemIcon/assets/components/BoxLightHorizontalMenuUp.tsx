/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightHorizontalMenuUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightHorizontalMenuUpProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightHorizontalMenuUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightHorizontalMenuUpProps) {
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
          id="memory-box-light-horizontal-menu-up"
          viewBox="0 0 22 22"
        >
          <path d="M22 12H15V11H14V10H13V9H12V8H10V9H9V10H8V11H7V12H0V10H6V9H7V8H8V7H9V6H10V5H12V6H13V7H14V8H15V9H16V10H22M17 17H5V15H6V14H7V13H8V12H9V11H10V10H12V11H13V12H14V13H15V14H16V15H17M13 15V14H12V13H10V14H9V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightHorizontalMenuUp;
