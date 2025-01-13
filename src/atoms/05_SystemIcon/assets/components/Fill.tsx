/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/fill
import React from 'react';

interface FillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FillProps & React.SVGProps<SVGSVGElement>>;

const Fill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FillProps) {
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
          id="memory-fill"
          viewBox="0 0 22 22"
        >
          <path d="M22 22H0V0H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Fill;
