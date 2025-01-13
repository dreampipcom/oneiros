/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/gamepad-right
import React from 'react';

interface GamepadRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<GamepadRightProps & React.SVGProps<SVGSVGElement>>;

const GamepadRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: GamepadRightProps) {
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
          id="memory-gamepad-right"
          viewBox="0 0 22 22"
        >
          <path d="M18 12H16V10H18M14 21H8V20H7V15H2V14H1V8H2V7H7V2H8V1H14V2H15V7H20V8H21V14H20V15H15V20H14M13 19V13H19V9H13V3H9V9H3V13H9V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default GamepadRight;
