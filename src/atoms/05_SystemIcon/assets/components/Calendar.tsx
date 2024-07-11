/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CalendarProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CalendarProps & React.SVGProps<SVGSVGElement>>;

const Calendar: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CalendarProps) {
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
          id="memory-calendar"
          viewBox="0 0 22 22"
        >
          <path d="M19 20H3V19H2V3H3V2H5V0H7V2H15V0H17V2H19V3H20V19H19V20M4 4V6H18V4H4M4 8V18H18V8H4M12 12H16V16H12V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Calendar;
