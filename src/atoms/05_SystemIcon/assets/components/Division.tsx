/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface DivisionProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DivisionProps & React.SVGProps<SVGSVGElement>>;

const Division: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DivisionProps) {
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
          id="memory-division"
          viewBox="0 0 22 22"
        >
          <path d="M12,8H10V7H9V5H10V4H12V5H13V7H12ZM17,12H5V10H17ZM12,18H10V17H9V15H10V14H12V15H13V17H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Division;
