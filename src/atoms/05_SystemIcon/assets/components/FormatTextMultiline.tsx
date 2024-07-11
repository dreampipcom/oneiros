/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatTextMultilineProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatTextMultilineProps & React.SVGProps<SVGSVGElement>
>;

const FormatTextMultiline: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatTextMultilineProps) {
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
          id="memory-format-text-multiline"
          viewBox="0 0 22 22"
        >
          <path d="M19 6H3V4H19M13 10H3V8H13M13 14H3V12H13M13 18H3V16H13M18 18H16V17H15V16H14V15H16V8H18V15H20V16H19V17H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatTextMultiline;
