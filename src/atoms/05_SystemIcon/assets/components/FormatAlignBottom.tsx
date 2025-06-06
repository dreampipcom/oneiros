/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/format-align-bottom
import React from 'react';

interface FormatAlignBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatAlignBottomProps & React.SVGProps<SVGSVGElement>
>;

const FormatAlignBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatAlignBottomProps) {
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
          id="memory-format-align-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M12 11H10V10H9V9H8V8H7V7H6V6H10V2H12V6H16V7H15V8H14V9H13V10H12M18 15H4V13H18M14 18H4V16H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatAlignBottom;
