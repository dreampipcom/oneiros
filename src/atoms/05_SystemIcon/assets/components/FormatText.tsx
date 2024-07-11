/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FormatTextProps & React.SVGProps<SVGSVGElement>>;

const FormatText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatTextProps) {
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
          id="memory-format-text"
          viewBox="0 0 22 22"
        >
          <path d="M19 6H11V4H19M19 10H11V8H19M7 14H5V6H3V4H9V6H7M19 14H11V12H19M19 18H3V16H19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatText;
