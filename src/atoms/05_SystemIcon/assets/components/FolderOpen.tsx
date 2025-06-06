/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/folder-open
import React from 'react';

interface FolderOpenProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FolderOpenProps & React.SVGProps<SVGSVGElement>>;

const FolderOpen: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FolderOpenProps) {
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
          id="memory-folder-open"
          viewBox="0 0 22 22"
        >
          <path d="M1 4H2V3H9V4H10V5H20V6H21V18H20V19H2V18H1V4M3 9H19V7H9V6H8V5H3V9M3 17H19V11H3V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FolderOpen;
