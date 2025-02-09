/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/linen
import React from 'react';

interface LinenProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LinenProps & React.SVGProps<SVGSVGElement>>;

const Linen: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LinenProps) {
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
          id="memory-linen"
          viewBox="0 0 22 22"
        >
          <path d="M12 21H11V20H9V19H7V18H4V17H2V16H1V12H2V11H3V10H4V9H5V8H6V7H7V6H8V5H9V4H10V3H11V2H15V3H16V4H17V7H18V8H20V9H21V10H22V11H21V12H20V13H19V14H18V15H17V16H16V17H15V18H14V19H13V20H12M9 13V12H10V11H11V10H12V9H13V8H14V7H15V5H14V4H11V5H10V6H9V7H8V8H7V9H6V10H5V11H6V12H7V13M6 16V14H5V13H3V15H4V16M12 19V18H13V17H14V16H15V15H16V14H17V13H18V12H19V11H20V10H19V9H17V8H15V9H14V10H13V11H12V12H11V13H10V14H9V15H8V16H7V17H8V18H10V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Linen;
