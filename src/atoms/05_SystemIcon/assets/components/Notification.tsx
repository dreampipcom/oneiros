/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface NotificationProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<NotificationProps & React.SVGProps<SVGSVGElement>>;

const Notification: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: NotificationProps) {
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
          id="memory-notification"
          viewBox="0 0 22 22"
        >
          <path d="M12 20V21H10V20H8V18H14V20H12M2 15H3V14H4V6H5V4H6V3H8V2H10V1H12V2H14V3H16V4H17V6H18V14H19V15H20V17H2V15M6 15H16V7H15V5H13V4H9V5H7V7H6V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Notification;
