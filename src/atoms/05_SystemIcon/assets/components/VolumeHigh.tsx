/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/volume-high
import React from 'react';

interface VolumeHighProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<VolumeHighProps & React.SVGProps<SVGSVGElement>>;

const VolumeHigh: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: VolumeHighProps) {
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
          id="memory-volume-high"
          viewBox="0 0 22 22"
        >
          <path d="M13 2H15V3H16V4H17V5H18V6H19V8H20V14H19V16H18V17H17V18H16V19H15V20H13V18H14V17H15V16H16V15H17V13H18V9H17V7H16V6H15V5H14V4H13V2M14 7V8H15V10H16V12H15V14H14V15H13V7H14M2 8H6V7H7V6H8V5H9V4H10V3H11V19H10V18H9V17H8V16H7V15H6V14H2V8M4 10V12H7V13H8V14H9V8H8V9H7V10H4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default VolumeHigh;
