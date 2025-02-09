/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/diamond
import React from 'react';

interface DiamondProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DiamondProps & React.SVGProps<SVGSVGElement>>;

const Diamond: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DiamondProps) {
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
          id="memory-diamond"
          viewBox="0 0 22 22"
        >
          <path d="M6 2H16V3H17V4H18V5H19V6H20V12H19V13H18V14H17V15H16V16H15V17H14V18H13V19H12V20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V6H3V5H4V4H5V3H6V2M15 5V4H14V6H15V7H17V6H16V5H15M12 6V4H10V6H9V7H13V6H12M8 6V4H7V5H6V6H5V7H7V6H8M4 11H5V12H6V13H7V14H8V12H7V9H4V11M10 12V16H12V12H13V9H9V12H10M14 12V14H15V13H16V12H17V11H18V9H15V12H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Diamond;
