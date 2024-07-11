/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CreditCardProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CreditCardProps & React.SVGProps<SVGSVGElement>>;

const CreditCard: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CreditCardProps) {
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
          id="memory-credit-card"
          viewBox="0 0 22 22"
        >
          <path d="M2 4H20V5H21V17H20V18H2V17H1V5H2V4M3 6V8H19V6H3M3 16H19V11H3V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CreditCard;
