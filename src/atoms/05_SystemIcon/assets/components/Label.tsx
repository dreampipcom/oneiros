/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LabelProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LabelProps & React.SVGProps<SVGSVGElement>>;

const Label: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LabelProps) {
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
          id="memory-label"
          viewBox="0 0 22 22"
        >
          <path d="M2 4H15V5H16V6H17V7H18V8H19V9H20V10H21V12H20V13H19V14H18V15H17V16H16V17H15V18H2V17H1V5H2V4M16 13H17V12H18V10H17V9H16V8H15V7H14V6H3V16H14V15H15V14H16V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Label;
