/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BookmarkProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BookmarkProps & React.SVGProps<SVGSVGElement>>;

const Bookmark: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BookmarkProps) {
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
          id="memory-bookmark"
          viewBox="0 0 22 22"
        >
          <path d="M5 2H17V3H18V20H16V19H14V18H12V17H10V18H8V19H6V20H4V3H5V2M6 4V17H7V16H9V15H10V14H12V15H13V16H15V17H16V4H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Bookmark;
