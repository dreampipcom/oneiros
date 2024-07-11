/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TrashProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TrashProps & React.SVGProps<SVGSVGElement>>;

const Trash: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TrashProps) {
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
          id="memory-trash"
          viewBox="0 0 22 22"
        >
          <path d="M10 7V16H8V7H10M12 7H14V16H12V7M8 2H14V3H19V5H18V19H17V20H5V19H4V5H3V3H8V2M6 5V18H16V5H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Trash;
