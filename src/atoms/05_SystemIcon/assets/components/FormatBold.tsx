/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FormatBoldProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FormatBoldProps & React.SVGProps<SVGSVGElement>>;

const FormatBold: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FormatBoldProps) {
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
          id="memory-format-bold"
          viewBox="0 0 22 22"
        >
          <path d="M15 19H6V17H7V5H6V3H13V4H14V5H15V6H16V10H15V12H16V13H17V17H16V18H15M12 10V9H13V7H12V6H10V10M13 16V15H14V14H13V13H10V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FormatBold;
