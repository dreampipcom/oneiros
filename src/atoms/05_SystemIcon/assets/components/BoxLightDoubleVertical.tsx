/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightDoubleVerticalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightDoubleVerticalProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightDoubleVertical: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightDoubleVerticalProps) {
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
          id="memory-box-light-double-vertical"
          viewBox="0 0 22 22"
        >
          <path d="M12 22V0H14V22H12M8 22V0H10V22H8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightDoubleVertical;
