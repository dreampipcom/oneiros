/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CartProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CartProps & React.SVGProps<SVGSVGElement>>;

const Cart: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CartProps) {
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
          id="memory-cart"
          viewBox="0 0 22 22"
        >
          <path d="M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Cart;
