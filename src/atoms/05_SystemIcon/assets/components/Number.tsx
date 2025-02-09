/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/number
import React from 'react';

interface NumberProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<NumberProps & React.SVGProps<SVGSVGElement>>;

const Number: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: NumberProps) {
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
          id="memory-number"
          viewBox="0 0 22 22"
        >
          <path d="M9 14H4V13H3V12H2V4H3V3H4V2H9V3H10V4H11V12H10V13H9M19 20H13V18H15V12H13V10H14V9H15V8H17V18H19M8 12V11H9V5H8V4H5V5H4V11H5V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Number;
