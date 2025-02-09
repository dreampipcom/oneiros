/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-right-bold
import React from 'react';

interface ArrowRightBoldProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowRightBoldProps & React.SVGProps<SVGSVGElement>>;

const ArrowRightBold: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowRightBoldProps) {
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
          id="memory-arrow-right-bold"
          viewBox="0 0 22 22"
        >
          <path d="M10 2H12V3H13V4H14V5H15V6H16V7H17V8H18V9H19V10H20V12H19V13H18V14H17V15H16V16H15V17H14V18H13V19H12V20H10V15H2V7H10V2M12 6V9H4V13H12V16H13V15H14V14H15V13H16V12H17V10H16V9H15V8H14V7H13V6H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowRightBold;
