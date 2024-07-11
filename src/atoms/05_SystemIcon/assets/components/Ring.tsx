/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface RingProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<RingProps & React.SVGProps<SVGSVGElement>>;

const Ring: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: RingProps) {
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
          id="memory-ring"
          viewBox="0 0 22 22"
        >
          <path d="M14 21H8V20H6V19H5V18H4V16H3V10H4V8H5V7H6V6H8V5H7V4H6V3H7V2H15V3H16V4H15V5H14V6H16V7H17V8H18V10H19V16H18V18H17V19H16V20H14M12 6V5H13V4H9V5H10V6M13 18V17H15V15H16V11H15V9H13V8H9V9H7V11H6V15H7V17H9V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Ring;
