/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDashedUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDashedUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDashedUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDashedUpLeftProps) {
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
          id="memory-box-light-dashed-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M10 22V20H12V22H10M10 18V15H12V18H10M10 13V10H13V12H12V13H10M22 12H20V10H22V12M18 12H15V10H18V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDashedUpLeft;
