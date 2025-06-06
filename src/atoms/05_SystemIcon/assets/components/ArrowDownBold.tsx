/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/arrow-down-bold
import React from 'react';

interface ArrowDownBoldProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ArrowDownBoldProps & React.SVGProps<SVGSVGElement>>;

const ArrowDownBold: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ArrowDownBoldProps) {
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
          id="memory-arrow-down-bold"
          viewBox="0 0 22 22"
        >
          <path d="M20 10V12H19V13H18V14H17V15H16V16H15V17H14V18H13V19H12V20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H7V2H15V10H20M16 12H13V4H9V12H6V13H7V14H8V15H9V16H10V17H12V16H13V15H14V14H15V13H16V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ArrowDownBold;
