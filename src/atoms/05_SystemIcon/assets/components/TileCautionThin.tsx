/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/tile-caution-thin
import React from 'react';

interface TileCautionThinProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TileCautionThinProps & React.SVGProps<SVGSVGElement>
>;

const TileCautionThin: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TileCautionThinProps) {
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
          id="memory-tile-caution-thin"
          viewBox="0 0 22 22"
        >
          <path d="M2 10H0V8H1V7H3V6H5V5H7V4H9V3H11V2H13V1H15V0H20V1H18V2H16V3H14V4H12V5H10V6H8V7H6V8H4V9H2M2 21H0V19H1V18H3V17H5V16H7V15H9V14H11V13H13V12H15V11H17V10H19V9H21V8H22V11H20V12H18V13H16V14H14V15H12V16H10V17H8V18H6V19H4V20H2M22 22H17V21H19V20H21V19H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TileCautionThin;
