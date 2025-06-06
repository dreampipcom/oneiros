/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/magnify-minus
import React from 'react';

interface MagnifyMinusProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MagnifyMinusProps & React.SVGProps<SVGSVGElement>>;

const MagnifyMinus: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MagnifyMinusProps) {
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
          id="memory-magnify-minus"
          viewBox="0 0 22 22"
        >
          <path d="M12 10H6V8H12M19 20H17V19H16V18H15V17H14V15H12V16H6V15H5V14H4V13H3V12H2V6H3V5H4V4H5V3H6V2H12V3H13V4H14V5H15V6H16V12H15V14H17V15H18V16H19V17H20V19H19M11 14V13H13V11H14V7H13V5H11V4H7V5H5V7H4V11H5V13H7V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MagnifyMinus;
