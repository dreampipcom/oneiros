/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-left-right
import React from 'react';

interface ArrowLeftRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowLeftRightProps & React.SVGProps<SVGSVGElement>>;

const ArrowLeftRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowLeftRightProps) {
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
          id="memory-arrow-left-right"
          viewBox="0 0 22 22"
        >
          <path d="M19 10V12H18V13H17V14H16V15H15V16H13V14H14V13H15V12H7V13H8V14H9V16H7V15H6V14H5V13H4V12H3V10H4V9H5V8H6V7H7V6H9V8H8V9H7V10H15V9H14V8H13V6H15V7H16V8H17V9H18V10" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowLeftRight;
