/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/box-light-double-vertical-left
import React from 'react';

interface BoxLightDoubleVerticalLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleVerticalLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleVerticalLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleVerticalLeftProps) {
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
          id="memory-box-light-double-vertical-left"
          viewBox="0 0 22 22"
        >
          <path d="M10,10H0V8H8V0H10ZM10,22H8V14H0V12H10ZM14,22H12V0H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleVerticalLeft;
