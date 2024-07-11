/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FireProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FireProps & React.SVGProps<SVGSVGElement>>;

const Fire: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FireProps) {
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
          id="memory-fire"
          viewBox="0 0 22 22"
        >
          <path d="M14 20H7V19H6V18H5V17H4V12H5V10H6V9H7V8H8V9H9V11H10V9H11V5H10V4H9V3H8V2H11V3H13V4H14V5H15V6H16V7H17V9H18V16H17V18H16V19H14M12 18V17H14V16H15V14H16V10H15V8H14V7H13V11H12V13H11V14H10V15H9V14H8V11H7V12H6V16H7V17H8V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Fire;
