/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatVerticalAlignCenterProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FormatVerticalAlignCenterProps & React.SVGProps<SVGSVGElement>
>;

const FormatVerticalAlignCenter: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatVerticalAlignCenterProps) {
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
          id="memory-format-vertical-align-center"
          viewBox="0 0 22 22"
        >
          <path d="M12 9H10V8H9V7H8V6H7V5H10V2H12V5H15V6H14V7H13V8H12M18 12H4V10H18M12 20H10V17H7V16H8V15H9V14H10V13H12V14H13V15H14V16H15V17H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatVerticalAlignCenter;
