/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatLineSpacingProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatLineSpacingProps & React.SVGProps<SVGSVGElement>
>;

const FormatLineSpacing: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatLineSpacingProps) {
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
          id="memory-format-line-spacing"
          viewBox="0 0 22 22"
        >
          <path d="M20 7H11V5H20M20 12H11V10H20M20 17H11V15H20M7 19H5V18H4V17H3V16H2V15H5V7H2V6H3V5H4V4H5V3H7V4H8V5H9V6H10V7H7V15H10V16H9V17H8V18H7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatLineSpacing;
