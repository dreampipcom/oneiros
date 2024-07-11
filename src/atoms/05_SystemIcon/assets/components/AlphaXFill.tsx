/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlphaXFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AlphaXFillProps & React.SVGProps<SVGSVGElement>>;

const AlphaXFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlphaXFillProps) {
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
          id="memory-alpha-x-fill"
          viewBox="0 0 22 22"
        >
          <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M13 16H15V13H14V12H13V10H14V9H15V6H13V8H12V9H10V8H9V6H7V9H8V10H9V12H8V13H7V16H9V14H10V13H12V14H13V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlphaXFill;
