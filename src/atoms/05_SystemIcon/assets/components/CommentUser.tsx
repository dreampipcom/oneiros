/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CommentUserProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CommentUserProps & React.SVGProps<SVGSVGElement>>;

const CommentUser: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CommentUserProps) {
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
          id="memory-comment-user"
          viewBox="0 0 22 22"
        >
          <path d="M12 10H10V9H9V7H10V6H12V7H13V9H12M15 14H7V12H8V11H14V12H15M8 19H9V18H10V17H11V16H19V4H3V16H8M10 21H6V18H2V17H1V3H2V2H20V3H21V17H20V18H12V19H11V20H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CommentUser;
