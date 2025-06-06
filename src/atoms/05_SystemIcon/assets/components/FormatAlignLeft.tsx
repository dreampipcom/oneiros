/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/format-align-left
import React from 'react';

interface FormatAlignLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatAlignLeftProps & React.SVGProps<SVGSVGElement>
>;

const FormatAlignLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatAlignLeftProps) {
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
          id="memory-format-align-left"
          viewBox="0 0 22 22"
        >
          <path d="M18 6H4V4H18M14 9H4V7H14M18 12H4V10H18M14 15H4V13H14M18 18H4V16H18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatAlignLeft;
