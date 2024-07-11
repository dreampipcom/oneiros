/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface VolumeMuteProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<VolumeMuteProps & React.SVGProps<SVGSVGElement>>;

const VolumeMute: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: VolumeMuteProps) {
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
          id="memory-volume-mute"
          viewBox="0 0 22 22"
        >
          <path d="M12 7H14V8H15V9H17V8H18V7H20V9H19V10H18V12H19V13H20V15H18V14H17V13H15V14H14V15H12V13H13V12H14V10H13V9H12V7M6 8V7H7V6H8V5H9V4H10V3H11V19H10V18H9V17H8V16H7V15H6V14H2V8H6M7 10H4V12H7V13H8V14H9V8H8V9H7V10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default VolumeMute;
