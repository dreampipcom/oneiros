/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/plus-box-fill
import React from 'react';

interface PlusBoxFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PlusBoxFillProps & React.SVGProps<SVGSVGElement>>;

const PlusBoxFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PlusBoxFillProps) {
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
          id="memory-plus-box-fill"
          viewBox="0 0 22 22"
        >
          <path d="M18,20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18ZM12,16V12H16V10H12V6H10V10H6V12H10V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default PlusBoxFill;
