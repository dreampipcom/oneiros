/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/pictogrammers
import React from 'react';

interface PictogrammersProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<PictogrammersProps & React.SVGProps<SVGSVGElement>>;

const Pictogrammers: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: PictogrammersProps) {
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
          id="memory-pictogrammers"
          viewBox="0 0 22 22"
        >
          <path d="M4 0H18V1H19V2H20V20H19V21H18V22H4V21H3V20H2V2H3V1H4V0M4 18V19H5V20H17V19H18V18H4M17 2H5V3H4V15H5V16H17V15H18V3H17V2M13 4V5H14V6H15V8H14V9H13V10H10V14H8V4H13M12 6H10V8H12V6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Pictogrammers;
