/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-down-right
import React from 'react';

interface ArrowDownRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowDownRightProps & React.SVGProps<SVGSVGElement>>;

const ArrowDownRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowDownRightProps) {
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
          id="memory-arrow-down-right"
          viewBox="0 0 22 22"
        >
          <path d="M19 12V14H18V15H17V16H16V17H15V18H13V16H14V15H15V14H11V13H9V12H8V10H7V3H9V9H10V11H12V12H15V11H14V10H13V8H15V9H16V10H17V11H18V12" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowDownRight;
