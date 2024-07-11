/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface MusicNoteProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<MusicNoteProps & React.SVGProps<SVGSVGElement>>;

const MusicNote: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: MusicNoteProps) {
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
          id="memory-music-note"
          viewBox="0 0 22 22"
        >
          <path d="M11 2H18V7H13V18H12V19H11V20H7V19H6V18H5V14H6V13H7V12H11V2M11 15H10V14H8V15H7V17H8V18H10V17H11V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default MusicNote;
