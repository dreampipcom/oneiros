/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/bow
import React from 'react';

interface BowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BowProps & React.SVGProps<SVGSVGElement>>;

const Bow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BowProps) {
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
          id="memory-bow"
          viewBox="0 0 22 22"
        >
          <path d="M1 3H11V4H13V5H15V6H16V7H17V9H18V11H19V21H17V19H15V18H14V17H13V16H12V15H11V14H10V13H9V12H8V11H7V10H6V9H5V8H4V7H3V5H1M16 18H17V12H16V10H15V8H14V7H12V6H10V5H4V6H5V7H6V8H7V9H8V10H9V11H10V12H11V13H12V14H13V15H14V16H15V17H16" />
        </svg>
      </g>
    </svg>
  );
};

export default Bow;
