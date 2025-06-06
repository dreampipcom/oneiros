/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/radiobox-marked
import React from 'react';

interface RadioboxMarkedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<RadioboxMarkedProps & React.SVGProps<SVGSVGElement>>;

const RadioboxMarked: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: RadioboxMarkedProps) {
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
          id="memory-radiobox-marked"
          viewBox="0 0 22 22"
        >
          <path d="M8 2H14V3H16V4H17V5H18V6H19V8H20V14H19V16H18V17H17V18H16V19H14V20H8V19H6V18H5V17H4V16H3V14H2V8H3V6H4V5H5V4H6V3H8V2M9 4V5H7V6H6V7H5V9H4V13H5V15H6V16H7V17H9V18H13V17H15V16H16V15H17V13H18V9H17V7H16V6H15V5H13V4H9M13 7V8H14V9H15V13H14V14H13V15H9V14H8V13H7V9H8V8H9V7H13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default RadioboxMarked;
