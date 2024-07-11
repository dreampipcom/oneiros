/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BriefcaseProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<BriefcaseProps & React.SVGProps<SVGSVGElement>>;

const Briefcase: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BriefcaseProps) {
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
          id="memory-briefcase"
          viewBox="0 0 22 22"
        >
          <path d="M2 6H7V3H8V2H14V3H15V6H20V7H21V19H20V20H2V19H1V7H2V6M9 6H13V4H9V6M19 8H3V18H19V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Briefcase;
