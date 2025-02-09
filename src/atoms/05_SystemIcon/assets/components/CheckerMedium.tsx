/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/checker-medium
import React from 'react';

interface CheckerMediumProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CheckerMediumProps & React.SVGProps<SVGSVGElement>>;

const CheckerMedium: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CheckerMediumProps) {
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
          id="memory-checker-medium"
          viewBox="0 0 22 22"
        >
          <path d="M22 22H18V19H15V22H11V19H7V22H4V19H0V15H4V11H0V8H4V4H0V0H4V4H7V0H11V4H15V0H18V4H22V8H18V11H22V15H18V19H22M11 8V4H7V8M18 8V4H15V8M7 11V8H4V11M15 11V8H11V11M11 15V11H7V15M18 15V11H15V15M7 19V15H4V19M15 19V15H11V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CheckerMedium;
