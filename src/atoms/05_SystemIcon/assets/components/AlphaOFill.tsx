/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/alpha-o-fill
import React from 'react';

interface AlphaOFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AlphaOFillProps & React.SVGProps<SVGSVGElement>>;

const AlphaOFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlphaOFillProps) {
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
          id="memory-alpha-o-fill"
          viewBox="0 0 22 22"
        >
          <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M9 6L9 7L8 7V15H9V16H13L13 15L14 15V7H13V6H9M10 8H12V14H10V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlphaOFill;
