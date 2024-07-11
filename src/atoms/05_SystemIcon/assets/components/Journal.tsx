/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface JournalProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<JournalProps & React.SVGProps<SVGSVGElement>>;

const Journal: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: JournalProps) {
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
          id="memory-journal"
          viewBox="0 0 22 22"
        >
          <path d="M15 8H8V6H15M14 13H9V11H14M18 21H4V20H3V17H2V14H3V12H2V10H3V8H2V5H3V2H4V1H18V2H19V20H18M17 19V3H5V5H6V8H5V10H6V12H5V14H6V17H5V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Journal;
