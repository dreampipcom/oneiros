/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface EyeFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<EyeFillProps & React.SVGProps<SVGSVGElement>>;

const EyeFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: EyeFillProps) {
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
          id="memory-eye-fill"
          viewBox="0 0 22 22"
        >
          <path d="M12 14H10V13H9V12H8V10H9V9H10V8H12V9H13V10H14V12H13V13H12M15 17H7V16H5V15H3V14H2V13H1V9H2V8H3V7H5V6H7V5H15V6H17V7H19V8H20V9H21V13H20V14H19V15H17V16H15M13 15V14H14V13H15V9H14V8H13V7H9V8H8V9H7V13H8V14H9V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default EyeFill;
