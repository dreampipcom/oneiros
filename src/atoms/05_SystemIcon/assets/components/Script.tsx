/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ScriptProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ScriptProps & React.SVGProps<SVGSVGElement>>;

const Script: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ScriptProps) {
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
          id="memory-script"
          viewBox="0 0 22 22"
        >
          <path d="M20 1H5V2H4V15H6V3H15V19H13V18H12V17H1V20H2V21H16V20H17V3H19V5H21V2H20" />
        </svg>
      </g>
    </svg>
  );
};

export default Script;
