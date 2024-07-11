/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CloudDownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CloudDownProps & React.SVGProps<SVGSVGElement>>;

const CloudDown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CloudDownProps) {
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
          id="memory-cloud-down"
          viewBox="0 0 22 22"
        >
          <path d="M19 15H14V13H18V12H19V10H18V9H14V8H15V5H14V4H13V3H9V4H8V6H9V7H6V8H4V9H3V12H4V13H8V15H3V14H2V13H1V8H2V7H3V6H5V5H6V3H7V2H8V1H14V2H15V3H16V4H17V7H19V8H20V9H21V13H20V14H19M12 21H10V20H9V19H8V18H7V17H10V11H12V17H15V18H14V19H13V20H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CloudDown;
