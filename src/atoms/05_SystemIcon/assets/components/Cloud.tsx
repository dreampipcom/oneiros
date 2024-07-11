/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CloudProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CloudProps & React.SVGProps<SVGSVGElement>>;

const Cloud: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CloudProps) {
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
          id="memory-cloud"
          viewBox="0 0 22 22"
        >
          <path d="M19 18H3V17H2V16H1V11H2V10H3V9H5V8H6V6H7V5H8V4H14V5H15V6H16V7H17V10H19V11H20V12H21V16H20V17H19M18 16V15H19V13H18V12H14V11H15V8H14V7H13V6H9V7H8V9H9V10H6V11H4V12H3V15H4V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Cloud;
