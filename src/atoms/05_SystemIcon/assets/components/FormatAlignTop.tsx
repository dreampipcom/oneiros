/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatAlignTopProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FormatAlignTopProps & React.SVGProps<SVGSVGElement>>;

const FormatAlignTop: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatAlignTopProps) {
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
          id="memory-format-align-top"
          viewBox="0 0 22 22"
        >
          <path d="M18 6H4V4H18M14 9H4V7H14M12 20H10V16H6V15H7V14H8V13H9V12H10V11H12V12H13V13H14V14H15V15H16V16H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatAlignTop;
