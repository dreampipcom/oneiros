/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/device
import React from 'react';

interface DeviceProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DeviceProps & React.SVGProps<SVGSVGElement>>;

const Device: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DeviceProps) {
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
          id="memory-device"
          viewBox="0 0 22 22"
        >
          <path d="M2 1H20V2H20.94V20H20V21H2V20H1.06V2H2V1M3 3V19H19V3H3M4 4H18V12H4V4M5 14H8V17H5V14M12 15H14V17H12V15M15 14H17V16H15V14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Device;
