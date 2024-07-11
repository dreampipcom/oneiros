/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignHorizontalDistributeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignHorizontalDistributeProps & React.SVGProps<SVGSVGElement>
>;

const AlignHorizontalDistribute: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignHorizontalDistributeProps) {
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
          id="memory-align-horizontal-distribute"
          viewBox="0 0 22 22"
        >
          <path d="M14 16H8V6H14M4 20H2V2H4M20 20H18V2H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignHorizontalDistribute;
