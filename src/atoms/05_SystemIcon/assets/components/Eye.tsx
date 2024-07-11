/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface EyeProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<EyeProps & React.SVGProps<SVGSVGElement>>;

const Eye: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: EyeProps) {
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
          id="memory-eye"
          viewBox="0 0 22 22"
        >
          <path d="M13 14H9V13H8V9H9V8H13V9H14V13H13M15 17H7V16H5V15H3V14H2V13H1V9H2V8H3V7H5V6H7V5H15V6H17V7H19V8H20V9H21V13H20V14H19V15H17V16H15M12 12V10H10V12M15 15V14H17V13H18V12H19V10H18V9H17V8H15V7H7V8H5V9H4V10H3V12H4V13H5V14H7V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Eye;
