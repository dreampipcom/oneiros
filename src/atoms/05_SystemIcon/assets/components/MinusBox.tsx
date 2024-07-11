/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MinusBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MinusBoxProps & React.SVGProps<SVGSVGElement>>;

const MinusBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MinusBoxProps) {
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
          id="memory-minus-box"
          viewBox="0 0 22 22"
        >
          <path d="M16,12H6V10H16ZM18,20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18ZM17,18V17H18V5H17V4H5V5H4V17H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MinusBox;
