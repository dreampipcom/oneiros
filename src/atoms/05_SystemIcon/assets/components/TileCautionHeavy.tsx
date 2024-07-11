/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TileCautionHeavyProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  TileCautionHeavyProps & React.SVGProps<SVGSVGElement>
>;

const TileCautionHeavy: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TileCautionHeavyProps) {
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
          id="memory-tile-caution-heavy"
          viewBox="0 0 22 22"
        >
          <path d="M2 10H0V6H1V5H3V4H5V3H7V2H9V1H11V0H20V1H18V2H16V3H14V4H12V5H10V6H8V7H6V8H4V9H2M2 21H0V17H1V16H3V15H5V14H7V13H9V12H11V11H13V10H15V9H17V8H19V7H21V6H22V11H20V12H18V13H16V14H14V15H12V16H10V17H8V18H6V19H4V20H2M22 22H13V21H15V20H17V19H19V18H21V17H22Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TileCautionHeavy;
