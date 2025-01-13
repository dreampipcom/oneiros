/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-round-down-right
import React from 'react';

interface BoxLightRoundDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightRoundDownRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightRoundDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightRoundDownRightProps) {
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
          id="memory-box-light-round-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 0V4H11V7H10V8H9V9H8V10H7V11H4V12H0V10H3V9H6V8H7V7H8V6H9V3H10V0H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightRoundDownRight;
