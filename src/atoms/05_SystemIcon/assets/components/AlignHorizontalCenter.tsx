/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlignHorizontalCenterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlignHorizontalCenterProps & React.SVGProps<SVGSVGElement>
>;

const AlignHorizontalCenter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlignHorizontalCenterProps) {
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
          id="memory-align-horizontal-center"
          viewBox="0 0 22 22"
        >
          <path d="M12 20H10V16H6V12H10V10H4V6H10V2H12V6H18V10H12V12H16V16H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlignHorizontalCenter;
