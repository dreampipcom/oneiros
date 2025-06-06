/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/comment
import React from 'react';

interface CommentProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CommentProps & React.SVGProps<SVGSVGElement>>;

const Comment: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CommentProps) {
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
          id="memory-comment"
          viewBox="0 0 22 22"
        >
          <path d="M2 2H20V3H21V17H20V18H12V19H11V20H10V21H6V18H2V17H1V3H2V2M3 4V16H8V19H9V18H10V17H11V16H19V4H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Comment;
