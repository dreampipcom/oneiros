/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PencilProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PencilProps & React.SVGProps<SVGSVGElement>>;

const Pencil: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PencilProps) {
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
          id="memory-pencil"
          viewBox="0 0 22 22"
        >
          <path d="M16 2H17V3H18V4H19V5H20V6H19V7H18V8H17V7H16V6H15V5H14V4H15V3H16M12 6H14V7H15V8H16V10H15V11H14V12H13V13H12V14H11V15H10V16H9V17H8V18H7V19H6V20H2V16H3V15H4V14H5V13H6V12H7V11H8V10H9V9H10V8H11V7H12" />
        </svg>
      </g>
    </svg>
  );
};

export default Pencil;
