/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignVerticalTopProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignVerticalTopProps & React.SVGProps<SVGSVGElement>
>;

const AlignVerticalTop: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignVerticalTopProps) {
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
          id="memory-align-vertical-top"
          viewBox="0 0 22 22"
        >
          <path d="M20 4H2V2H20M16 14H12V6H16M10 18H6V6H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignVerticalTop;
