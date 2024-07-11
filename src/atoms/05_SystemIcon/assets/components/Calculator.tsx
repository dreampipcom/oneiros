/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CalculatorProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CalculatorProps & React.SVGProps<SVGSVGElement>>;

const Calculator: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CalculatorProps) {
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
          id="memory-calculator"
          viewBox="0 0 22 22"
        >
          <path d="M18,21H4V20H3V3H4V2H18V3H19V20H18ZM16,7V4H6V7ZM8,11V9H6V11ZM12,11V9H10V11ZM16,11V9H14V11ZM8,15V13H6V15ZM12,15V13H10V15ZM16,15V13H14V15ZM8,19V17H6V19ZM12,19V17H10V19ZM16,19V17H14V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Calculator;
