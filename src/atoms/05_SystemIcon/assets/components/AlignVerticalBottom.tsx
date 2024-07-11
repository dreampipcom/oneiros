/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignVerticalBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignVerticalBottomProps & React.SVGProps<SVGSVGElement>
>;

const AlignVerticalBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignVerticalBottomProps) {
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
          id="memory-align-vertical-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M10 16H6V4H10M16 16H12V8H16M20 20H2V18H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignVerticalBottom;
