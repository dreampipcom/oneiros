/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/wall-front-gate
import React from 'react';

interface WallFrontGateProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<WallFrontGateProps & React.SVGProps<SVGSVGElement>>;

const WallFrontGate: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: WallFrontGateProps) {
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
          id="memory-wall-front-gate"
          viewBox="0 0 22 22"
        >
          <path d="M20 18H13V13H12V12H10V13H9V18H2V4H4V6H6V4H8V6H10V4H12V6H14V4H16V6H18V4H20M18 16V8H4V16H7V12H8V11H9V10H13V11H14V12H15V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default WallFrontGate;
