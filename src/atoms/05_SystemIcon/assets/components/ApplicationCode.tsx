/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ApplicationCodeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  ApplicationCodeProps & React.SVGProps<SVGSVGElement>
>;

const ApplicationCode: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ApplicationCodeProps) {
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
          id="memory-application-code"
          viewBox="0 0 22 22"
        >
          <path d="M11 16H9V15H8V11H9V10H11V12H10V14H11M15 16H13V14H14V12H13V10H15V11H16V15H15M19 20H3V19H2V3H3V2H19V3H20V19H19M18 6V4H4V6M18 18V8H4V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ApplicationCode;
