/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/heart-broken
import React from 'react';

interface HeartBrokenProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<HeartBrokenProps & React.SVGProps<SVGSVGElement>>;

const HeartBroken: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: HeartBrokenProps) {
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
          id="memory-heart-broken"
          viewBox="0 0 22 22"
        >
          <path d="M14,14H15V13H16V12H17V11H18V9H19V6H18V5H17V4H14V9H13V11H14ZM8,15H9V13H8V12H7V8H8V6H9V5H8V4H5V5H4V6H3V9H4V11H5V12H6V13H7V14H8ZM14,18H13V17H12V12H11V8H12V3H13V2H18V3H19V4H20V5H21V10H20V12H19V13H18V14H17V15H16V16H15V17H14ZM12,20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H1V5H2V4H3V3H4V2H9V3H10V4H11V7H10V9H9V11H10V13H11V18H12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default HeartBroken;
