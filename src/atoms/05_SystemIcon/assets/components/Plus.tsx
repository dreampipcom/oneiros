/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PlusProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PlusProps & React.SVGProps<SVGSVGElement>>;

const Plus: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PlusProps) {
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
          id="memory-plus"
          viewBox="0 0 22 22"
        >
          <path d="M12 17H10V12H5V10H10V5H12V10H17V12H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Plus;
