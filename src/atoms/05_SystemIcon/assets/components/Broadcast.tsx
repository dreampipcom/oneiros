/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/broadcast
import React from 'react';

interface BroadcastProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BroadcastProps & React.SVGProps<SVGSVGElement>>;

const Broadcast: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BroadcastProps) {
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
          id="memory-broadcast"
          viewBox="0 0 22 22"
        >
          <path d="M12 13H10V12H9V10H10V9H12V10H13V12H12M15 16H14V15H13V14H14V13H15V9H14V8H13V7H9V8H8V9H7V13H8V14H9V15H8V16H7V15H6V14H5V8H6V7H7V6H8V5H14V6H15V7H16V8H17V14H16V15H15M17 20H16V19H15V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H7V19H6V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Broadcast;
