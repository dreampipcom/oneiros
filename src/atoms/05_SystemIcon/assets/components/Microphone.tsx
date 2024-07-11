/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MicrophoneProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MicrophoneProps & React.SVGProps<SVGSVGElement>>;

const Microphone: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MicrophoneProps) {
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
          id="memory-microphone"
          viewBox="0 0 22 22"
        >
          <path d="M10 21V18H8V17H6V16H5V15H4V13H3V9H5V12H6V14H7V15H9V16H13V15H15V14H16V12H17V9H19V13H18V15H17V16H16V17H14V18H12V21H10M8 13V12H7V3H8V2H9V1H13V2H14V3H15V12H14V13H13V14H9V13H8M9 11H10V12H12V11H13V4H12V3H10V4H9V11Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Microphone;
