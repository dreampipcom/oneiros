/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-up-right-box
import React from 'react';

interface ArrowUpRightBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  ArrowUpRightBoxProps & React.SVGProps<SVGSVGElement>
>;

const ArrowUpRightBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowUpRightBoxProps) {
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
          id="memory-arrow-up-right-box"
          viewBox="0 0 22 22"
        >
          <path d="M9 15H8V14H7V13H8V12H9V11H10V10H11V9H8V7H15V14H13V11H12V12H11V13H10V14H9M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M17 18V17H18V5H17V4H5V5H4V17H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowUpRightBox;
