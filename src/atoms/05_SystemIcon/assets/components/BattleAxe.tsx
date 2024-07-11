/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BattleAxeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BattleAxeProps & React.SVGProps<SVGSVGElement>>;

const BattleAxe: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BattleAxeProps) {
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
          id="memory-battle-axe"
          viewBox="0 0 22 22"
        >
          <path d="M15 1H11V2H10V3H9V4H8V8H12V9H11V10H10V11H9V12H8V13H7V14H6V15H5V16H4V17H3V18H2V19H1V20H2V21H3V20H4V19H5V18H6V17H7V16H8V15H9V14H10V13H11V12H12V11H13V10H14V14H18V13H19V12H20V11H21V7H17V5H15" />
        </svg>
      </g>
    </svg>
  );
};

export default BattleAxe;
