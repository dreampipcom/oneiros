/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface RelativeScaleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<RelativeScaleProps & React.SVGProps<SVGSVGElement>>;

const RelativeScale: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: RelativeScaleProps) {
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
          id="memory-relative-scale"
          viewBox="0 0 22 22"
        >
          <path d="M7 10H5V9H6V8H8V9H7M11 10H9V9H10V8H12V9H11M15 10H13V9H14V8H16V9H15M15 14H14V12H15V11H16V13H15M19 19H3V18H2V4H3V3H19V4H20V18H19M18 17V5H4V17H14V16H15V15H16V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default RelativeScale;
