/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface GamepadUpFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<GamepadUpFillProps & React.SVGProps<SVGSVGElement>>;

const GamepadUpFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: GamepadUpFillProps) {
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
          id="memory-gamepad-up-fill"
          viewBox="0 0 22 22"
        >
          <path d="M13 21H9V20H8V14H2V13H1V9H2V8H8V2H9V1H13V2H14V8H20V9H21V13H20V14H14V20H13M12 5V3H10V5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default GamepadUpFill;