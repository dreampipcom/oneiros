/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CloudUpProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CloudUpProps & React.SVGProps<SVGSVGElement>>;

const CloudUp: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CloudUpProps) {
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
          id="memory-cloud-up"
          viewBox="0 0 22 22"
        >
          <path d="M19 16H16V14H18V13H19V11H18V10H14V9H15V6H14V5H13V4H9V5H8V7H9V8H6V9H4V10H3V13H4V14H6V16H3V15H2V14H1V9H2V8H3V7H5V6H6V4H7V3H8V2H14V3H15V4H16V5H17V8H19V9H20V10H21V14H20V15H19M12 20H10V16H7V15H8V14H9V13H10V12H12V13H13V14H14V15H15V16H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CloudUp;
