/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface PoundProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PoundProps & React.SVGProps<SVGSVGElement>>;

const Pound: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PoundProps) {
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
          id="memory-pound"
          viewBox="0 0 22 22"
        >
          <path d="M14 19H12V15H8V19H6V15H3V13H7V9H4V7H8V3H10V7H14V3H16V7H19V9H15V13H18V15H14M13 13V9H9V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Pound;
