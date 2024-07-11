/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignHorizontalRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignHorizontalRightProps & React.SVGProps<SVGSVGElement>
>;

const AlignHorizontalRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignHorizontalRightProps) {
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
          id="memory-align-horizontal-right"
          viewBox="0 0 22 22"
        >
          <path d="M16 10H4V6H16M16 16H8V12H16M20 20H18V2H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignHorizontalRight;
