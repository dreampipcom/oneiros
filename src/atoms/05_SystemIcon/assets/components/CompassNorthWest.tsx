/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/compass-north-west
import React from 'react';

interface CompassNorthWestProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  CompassNorthWestProps & React.SVGProps<SVGSVGElement>
>;

const CompassNorthWest: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CompassNorthWestProps) {
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
          id="memory-compass-north-west"
          viewBox="0 0 22 22"
        >
          <path d="M2 6H4V7.5H5V10H6V6H8V16H6V14H5V12H4V16H2M10 6H12V12H13V13H14V8H16V13H17V12H18V6H20V13H19V15H18V16H16V15H14V16H12V15H11V13H10" />
        </svg>
      </g>
    </svg>
  );
};

export default CompassNorthWest;
