/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxOuterLightDashedUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxOuterLightDashedUpProps & React.SVGProps<SVGSVGElement>
>;

const BoxOuterLightDashedUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxOuterLightDashedUpProps) {
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
          id="memory-box-outer-light-dashed-up"
          viewBox="0 0 22 22"
        >
          <path d="M1 0H5V2H1V0M7 0H10V2H7V0M12 0H16V2H12V0M18 0H21V2H18V0Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxOuterLightDashedUp;
