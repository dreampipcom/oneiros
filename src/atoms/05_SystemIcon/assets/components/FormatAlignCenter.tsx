/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatAlignCenterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatAlignCenterProps & React.SVGProps<SVGSVGElement>
>;

const FormatAlignCenter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatAlignCenterProps) {
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
          id="memory-format-align-center"
          viewBox="0 0 22 22"
        >
          <path d="M18 6H4V4H18M15 9H7V7H15M18 12H4V10H18M15 15H7V13H15M18 18H4V16H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatAlignCenter;
