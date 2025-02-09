/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-fold-down-right
import React from 'react';

interface BoxLightFoldDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightFoldDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightFoldDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightFoldDownRightProps) {
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
          id="memory-box-light-fold-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M3 9H4V8H5V7H6V6H7V5H8V4H9V3H3M3 12H0V10H1V1H10V0H12V3H11V4H10V5H9V6H8V7H7V8H6V9H5V10H4V11H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightFoldDownRight;
