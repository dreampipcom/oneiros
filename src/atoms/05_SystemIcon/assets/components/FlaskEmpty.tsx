/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/flask-empty
import React from 'react';

interface FlaskEmptyProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<FlaskEmptyProps & React.SVGProps<SVGSVGElement>>;

const FlaskEmpty: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FlaskEmptyProps) {
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
          id="memory-flask-empty"
          viewBox="0 0 22 22"
        >
          <path d="M8 1H14V2H15V5H14V7H15V9H16V11H17V13H18V14H19V16H20V20H19V21H3V20H2V16H3V14H4V13H5V11H6V9H7V7H8V5H7V2H8V1M10 3V8H9V10H8V12H7V13H6V15H5V17H4V19H18V17H17V15H16V14H15V12H14V10H13V8H12V3H10Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FlaskEmpty;
