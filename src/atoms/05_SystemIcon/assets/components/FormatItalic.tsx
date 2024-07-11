/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatItalicProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FormatItalicProps & React.SVGProps<SVGSVGElement>>;

const FormatItalic: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatItalicProps) {
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
          id="memory-format-italic"
          viewBox="0 0 22 22"
        >
          <path d="M12 19H4V17H7V16H8V14H9V12H10V10H11V8H12V5H10V3H18V5H15V6H14V8H13V10H12V12H11V14H10V17H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatItalic;
