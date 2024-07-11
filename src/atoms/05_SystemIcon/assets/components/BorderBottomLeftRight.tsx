/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BorderBottomLeftRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BorderBottomLeftRightProps & React.SVGProps<SVGSVGElement>
>;

const BorderBottomLeftRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BorderBottomLeftRightProps) {
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
          id="memory-border-bottom-left-right"
          viewBox="0 0 22 22"
        >
          <path d="M10 4V2H12V4H10M6 4V2H8V4H6M14 4V2H16V4H14M18 2H20V20H2V2H4V18H18V2Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BorderBottomLeftRight;
