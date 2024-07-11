/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AppsBoxProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AppsBoxProps & React.SVGProps<SVGSVGElement>>;

const AppsBox: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AppsBoxProps) {
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
          id="memory-apps-box"
          viewBox="0 0 22 22"
        >
          <path d="M8 8H6V6H8M12 8H10V6H12M16 8H14V6H16M8 12H6V10H8M12 12H10V10H12M16 12H14V10H16M8 16H6V14H8M12 16H10V14H12M16 16H14V14H16M18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18M17 18V17H18V5H17V4H5V5H4V17H5V18Z" />
        </svg>
      </g>
    </svg>
  );
};

export default AppsBox;
