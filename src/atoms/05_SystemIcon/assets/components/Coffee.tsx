/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CoffeeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CoffeeProps & React.SVGProps<SVGSVGElement>>;

const Coffee: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CoffeeProps) {
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
          id="memory-coffee"
          viewBox="0 0 22 22"
        >
          <path d="M1 20V18H17V20H1M2 3H19V4H20V10H19V11H16V14H15V15H14V16H4V15H3V14H2V3M16 5V9H18V5H16M4 5V13H5V14H13V13H14V5H4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Coffee;
