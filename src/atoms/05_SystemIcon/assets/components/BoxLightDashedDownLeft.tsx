/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDashedDownLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDashedDownLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDashedDownLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDashedDownLeftProps) {
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
          id="memory-box-light-dashed-down-left"
          viewBox="0 0 22 22"
        >
          <path d="M22 12H20V10H22V12M18 12H15V10H18V12M13 12H10V9H12V10H13V12M12 0V2H10V0H12M12 4V7H10V4H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDashedDownLeft;
