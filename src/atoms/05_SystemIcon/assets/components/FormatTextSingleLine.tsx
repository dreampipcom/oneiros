/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatTextSingleLineProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatTextSingleLineProps & React.SVGProps<SVGSVGElement>
>;

const FormatTextSingleLine: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatTextSingleLineProps) {
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
          id="memory-format-text-single-line"
          viewBox="0 0 22 22"
        >
          <path d="M19 6H3V4H19M13 10H12V9H11V10H10V9H9V10H8V9H7V10H6V9H5V10H4V9H3V8H4V9H5V8H6V9H7V8H8V9H9V8H10V9H11V8H12V9H13M13 14H12V13H11V14H10V13H9V14H8V13H7V14H6V13H5V14H4V13H3V12H4V13H5V12H6V13H7V12H8V13H9V12H10V13H11V12H12V13H13M13 18H12V17H11V18H10V17H9V18H8V17H7V18H6V17H5V18H4V17H3V16H4V17H5V16H6V17H7V16H8V17H9V16H10V17H11V16H12V17H13M18 18H16V11H14V10H15V9H16V8H18V9H19V10H20V11H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatTextSingleLine;
