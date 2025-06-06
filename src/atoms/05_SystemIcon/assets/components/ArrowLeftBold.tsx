/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-left-bold
import React from 'react';

interface ArrowLeftBoldProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowLeftBoldProps & React.SVGProps<SVGSVGElement>>;

const ArrowLeftBold: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowLeftBoldProps) {
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
          id="memory-arrow-left-bold"
          viewBox="0 0 22 22"
        >
          <path d="M12 20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H3V9H4V8H5V7H6V6H7V5H8V4H9V3H10V2H12V7H20V15H12V20M10 16V13H18V9H10V6H9V7H8V8H7V9H6V10H5V12H6V13H7V14H8V15H9V16H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowLeftBold;
