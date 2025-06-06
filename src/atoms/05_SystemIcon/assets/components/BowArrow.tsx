/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/bow-arrow
import React from 'react';

interface BowArrowProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BowArrowProps & React.SVGProps<SVGSVGElement>>;

const BowArrow: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BowArrowProps) {
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
          id="memory-bow-arrow"
          viewBox="0 0 22 22"
        >
          <path d="M1 3H11V4H13V5H16V4H17V2H20V5H18V6H17V9H18V11H19V21H17V19H15V18H14V17H13V16H12V15H11V14H9V15H8V16H7V19H6V20H5V21H4V20H3V19H2V18H1V17H2V16H3V15H6V14H7V13H8V11H7V10H6V9H5V8H4V7H3V5H1V3M16 18H17V12H16V10H15V9H14V10H13V11H12V12H11V13H12V14H13V15H14V16H15V17H16V18M12 7V6H10V5H4V6H5V7H6V8H7V9H8V10H9V11H10V10H11V9H12V8H13V7H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BowArrow;
