/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FolderProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FolderProps & React.SVGProps<SVGSVGElement>>;

const Folder: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FolderProps) {
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
          id="memory-folder"
          viewBox="0 0 22 22"
        >
          <path d="M2 3H9V4H10V5H20V6H21V18H20V19H2V18H1V4H2V3M3 7V17H19V7H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Folder;
