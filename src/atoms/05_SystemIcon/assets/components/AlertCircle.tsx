/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/alert-circle
import React from 'react';

interface AlertCircleProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AlertCircleProps & React.SVGProps<SVGSVGElement>>;

const AlertCircle: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlertCircleProps) {
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
          id="memory-alert-circle"
          viewBox="0 0 22 22"
        >
          <path d="M12,12H10V6H12ZM12,16H10V14H12ZM15,21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15ZM14,19V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlertCircle;
