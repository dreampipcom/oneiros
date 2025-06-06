/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/crown
import React from 'react';

interface CrownProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CrownProps & React.SVGProps<SVGSVGElement>>;

const Crown: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CrownProps) {
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
          id="memory-crown"
          viewBox="0 0 22 22"
        >
          <path d="M2 17H20V19H2V17M4 6L4 7H5L5 8L6 8L6 7H7V6H8V5H9V4L10 4L10 3H12L12 4L13 4V5H14L14 6H15V7H16L16 8H17V7L18 7V6H19V5H20V16H2V5H3V6H4M7 14H18V10H15V9H14V8H13V7H12V6H10V7H9V8H8V9H7V10H4V14H7Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Crown;
