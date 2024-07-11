/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SpeakerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SpeakerProps & React.SVGProps<SVGSVGElement>>;

const Speaker: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SpeakerProps) {
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
          id="memory-speaker"
          viewBox="0 0 22 22"
        >
          <path d="M4 1H18V2H19V20H18V21H4V20H3V2H4V1M5 3V19H17V3H5M9 5H10V4H12V5H13V7H12V8H10V7H9V5M9 18V17H8V16H7V12H8V11H9V10H13V11H14V12H15V16H14V17H13V18H9M10 13H9V15H10V16H12V15H13V13H12V12H10V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Speaker;
