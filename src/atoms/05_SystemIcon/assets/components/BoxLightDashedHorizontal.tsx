/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDashedHorizontalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDashedHorizontalProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDashedHorizontal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDashedHorizontalProps) {
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
          id="memory-box-light-dashed-horizontal"
          viewBox="0 0 22 22"
        >
          <path d="M2 12H0V10H2M7 12H4V10H7M13 12H9V10H13M18 12H15V10H18M22 12H20V10H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDashedHorizontal;
