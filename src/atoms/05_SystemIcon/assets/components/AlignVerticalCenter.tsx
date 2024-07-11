/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignVerticalCenterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignVerticalCenterProps & React.SVGProps<SVGSVGElement>
>;

const AlignVerticalCenter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignVerticalCenterProps) {
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
          id="memory-align-vertical-center"
          viewBox="0 0 22 22"
        >
          <path d="M10 18H6V12H2V10H6V4H10V10H12V6H16V10H20V12H16V16H12V12H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignVerticalCenter;
