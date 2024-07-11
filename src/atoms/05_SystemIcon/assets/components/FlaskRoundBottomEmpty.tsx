/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface FlaskRoundBottomEmptyProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FlaskRoundBottomEmptyProps & React.SVGProps<SVGSVGElement>
>;

const FlaskRoundBottomEmpty: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FlaskRoundBottomEmptyProps) {
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
          id="memory-flask-round-bottom-empty"
          viewBox="0 0 22 22"
        >
          <path d="M9 1H13V3H14V8H15V9H16V10H17V11H18V17H17V18H16V19H15V20H14V21H8V20H7V19H6V18H5V17H4V11H5V10H6V9H7V8H8V3H9V1M10 5V9H9V10H8V11H7V12H6V16H7V17H8V18H9V19H13V18H14V17H15V16H16V12H15V11H14V10H13V9H12V5H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FlaskRoundBottomEmpty;
