/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDashedVerticalHorizontalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDashedVerticalHorizontalProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDashedVerticalHorizontal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDashedVerticalHorizontalProps) {
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
          id="memory-box-light-dashed-vertical-horizontal"
          viewBox="0 0 22 22"
        >
          <path d="M12 2H10V0H12M12 7H10V4H12M2 12H0V10H2M7 12H4V10H7M18 12H15V10H18M22 12H20V10H22M12 13H10V12H9V10H10V9H12V10H13V12H12M12 18H10V15H12M12 22H10V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDashedVerticalHorizontal;
