/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/gamepad-up-left
import React from 'react';

interface GamepadUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<GamepadUpLeftProps & React.SVGProps<SVGSVGElement>>;

const GamepadUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: GamepadUpLeftProps) {
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
          id="memory-gamepad-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M12 6H10V4H12M6 12H4V10H6M14 21H8V20H7V15H2V14H1V8H2V7H7V2H8V1H14V2H15V7H20V8H21V14H20V15H15V20H14M13 19V13H19V9H13V3H9V9H3V13H9V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default GamepadUpLeft;
