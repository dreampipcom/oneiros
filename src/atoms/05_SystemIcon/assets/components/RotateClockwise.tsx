/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/rotate-clockwise
import React from 'react';

interface RotateClockwiseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  RotateClockwiseProps & React.SVGProps<SVGSVGElement>
>;

const RotateClockwise: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: RotateClockwiseProps) {
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
          id="memory-rotate-clockwise"
          viewBox="0 0 22 22"
        >
          <path d="M22 11V12H21V13H20V14H19V15H17V14H16V13H15V12H14V11H17V9H16V7H15V6H13V5H9V6H7V7H6V9H5V13H6V15H7V16H9V17H13V16H16V18H14V19H8V18H6V17H5V16H4V14H3V8H4V6H5V5H6V4H8V3H14V4H16V5H17V6H18V8H19V11H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default RotateClockwise;
