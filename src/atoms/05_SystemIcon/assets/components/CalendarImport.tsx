/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CalendarImportProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CalendarImportProps & React.SVGProps<SVGSVGElement>>;

const CalendarImport: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CalendarImportProps) {
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
          id="memory-calendar-import"
          viewBox="0 0 22 22"
        >
          <path d="M19 19H13V17H18V9H4V17H9V19H3V18H2V4H3V3H5V1H7V3H15V1H17V3H19V4H20V18H19M12 21H10V15H7V14H8V13H9V12H10V11H12V12H13V13H14V14H15V15H12M18 7V5H4V7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CalendarImport;
