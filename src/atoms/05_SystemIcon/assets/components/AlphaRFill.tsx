/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/alpha-r-fill
import React from 'react';

interface AlphaRFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AlphaRFillProps & React.SVGProps<SVGSVGElement>>;

const AlphaRFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlphaRFillProps) {
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
          id="memory-alpha-r-fill"
          viewBox="0 0 22 22"
        >
          <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M8 6V16H10V12H11V14H12V16H14V13H13L13 11L14 11V7L13 7L13 6H8M10 8H12V10H10V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlphaRFill;
