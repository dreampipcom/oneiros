/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignVerticalDistributeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignVerticalDistributeProps & React.SVGProps<SVGSVGElement>
>;

const AlignVerticalDistribute: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignVerticalDistributeProps) {
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
          id="memory-align-vertical-distribute"
          viewBox="0 0 22 22"
        >
          <path d="M20 4H2V2H20M16 14H6V8H16M20 20H2V18H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignVerticalDistribute;
