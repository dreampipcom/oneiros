/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/format-float-left
import React from 'react';

interface FormatFloatLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatFloatLeftProps & React.SVGProps<SVGSVGElement>
>;

const FormatFloatLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatFloatLeftProps) {
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
          id="memory-format-float-left"
          viewBox="0 0 22 22"
        >
          <path d="M18 6H4V4H18M16 9H10V7H16M9 12H4V7H9M18 12H10V10H18M16 15H4V13H16M18 18H4V16H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatFloatLeft;
