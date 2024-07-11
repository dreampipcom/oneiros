/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AlertRhombusFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  AlertRhombusFillProps & React.SVGProps<SVGSVGElement>
>;

const AlertRhombusFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AlertRhombusFillProps) {
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
          id="memory-alert-rhombus-fill"
          viewBox="0 0 22 22"
        >
          <path d="M12,21H10V20H9V19H8V18H7V17H6V16H5V15H4V14H3V13H2V12H1V10H2V9H3V8H4V7H5V6H6V5H7V4H8V3H9V2H10V1H12V2H13V3H14V4H15V5H16V6H17V7H18V8H19V9H20V10H21V12H20V13H19V14H18V15H17V16H16V17H15V18H14V19H13V20H12ZM12,12V6H10V12ZM12,16V14H10V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AlertRhombusFill;
