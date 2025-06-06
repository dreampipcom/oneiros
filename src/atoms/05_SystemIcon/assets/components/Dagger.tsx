/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/dagger
import React from 'react';

interface DaggerProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<DaggerProps & React.SVGProps<SVGSVGElement>>;

const Dagger: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: DaggerProps) {
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
          id="memory-dagger"
          viewBox="0 0 22 22"
        >
          <path d="M10,13H11V12H12V11H13V10H14V9H15V8H16V7H17V5H15V6H14V7H13V8H12V9H11V10H10V11H9V12H10ZM6,19H4V18H3V16H4V15H5V14H6V13H5V12H4V10H5V9H7V10H8V9H9V8H10V7H11V6H12V5H13V4H14V3H19V8H18V9H17V10H16V11H15V12H14V13H13V14H12V15H13V17H12V18H10V17H9V16H8V17H7V18H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Dagger;
