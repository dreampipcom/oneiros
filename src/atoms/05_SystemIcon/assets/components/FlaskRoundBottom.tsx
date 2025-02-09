/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/flask-round-bottom
import React from 'react';

interface FlaskRoundBottomProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  FlaskRoundBottomProps & React.SVGProps<SVGSVGElement>
>;

const FlaskRoundBottom: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: FlaskRoundBottomProps) {
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
          id="memory-flask-round-bottom"
          viewBox="0 0 22 22"
        >
          <path d="M11 11H13V13H11V11M13 1V3H14V8H15V9H16V10H17V11H18V17H17V18H16V19H15V20H14V21H8V20H7V19H6V18H5V17H4V11H5V10H6V9H7V8H8V3H9V1H13M12 5H10V9H9V10H8V11H7V12H6V14H7V13H9V14H10V15H11V16H13V15H14V14H15V13H16V12H15V11H14V10H13V9H12V5Z" />
        </svg>
      </g>
    </svg>
  );
};

export default FlaskRoundBottom;
