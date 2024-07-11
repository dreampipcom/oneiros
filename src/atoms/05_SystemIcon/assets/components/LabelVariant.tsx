/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface LabelVariantProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LabelVariantProps & React.SVGProps<SVGSVGElement>>;

const LabelVariant: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LabelVariantProps) {
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
          id="memory-label-variant"
          viewBox="0 0 22 22"
        >
          <path d="M15 4V5H16V6H17V7H18V8H19V9H20V10H21V12H20V13H19V14H18V15H17V16H16V17H15V18H2V16H3V15H4V14H5V13H6V12H7V10H6V9H5V8H4V7H3V6H2V4H15M14 16V15H15V14H16V13H17V12H18V10H17V9H16V8H15V7H14V6H6V7H7V8H8V9H9V10H10V12H9V13H8V14H7V15H6V16H14Z" />
        </svg>
      </g>
    </svg>
  );
};

export default LabelVariant;
