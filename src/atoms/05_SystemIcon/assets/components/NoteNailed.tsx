/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface NoteNailedProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<NoteNailedProps & React.SVGProps<SVGSVGElement>>;

const NoteNailed: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: NoteNailedProps) {
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
          id="memory-note-nailed"
          viewBox="0 0 22 22"
        >
          <path d="M14 12H8V10H14M14 16H8V14H13V15H14M19 21H15V20H14V21H10V20H8V21H6V20H5V18H4V16H3V11H4V6H3V4H10V3H9V2H13V3H12V4H19V12H18V15H19M13 19V18H17V16H16V11H17V6H12V8H11V9H10V6H6V12H5V15H6V17H7V18H11V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default NoteNailed;
