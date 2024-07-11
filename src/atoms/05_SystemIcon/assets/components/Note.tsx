/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface NoteProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<NoteProps & React.SVGProps<SVGSVGElement>>;

const Note: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: NoteProps) {
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
          id="memory-note"
          viewBox="0 0 22 22"
        >
          <path d="M15 3V4H16V5H17V6H18V7H19V8H20V9H21V18H20V19H2V18H1V4H2V3H15M15 6H14V10H18V9H17V8H16V7H15V6M3 5V17H19V12H13V11H12V5H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Note;
