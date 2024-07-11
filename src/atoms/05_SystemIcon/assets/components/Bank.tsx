/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BankProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BankProps & React.SVGProps<SVGSVGElement>>;

const Bank: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BankProps) {
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
          id="memory-bank"
          viewBox="0 0 22 22"
        >
          <path d="M20 19H2V17H4V9H2V7H3V6H5V5H7V4H9V3H13V4H15V5H17V6H19V7H20V9H18V17H20M17 9V7H15V6H13V5H9V6H7V7H5V9M8 17V11H6V17M12 17V11H10V17M16 17V11H14V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Bank;
