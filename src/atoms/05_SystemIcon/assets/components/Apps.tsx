/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AppsProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AppsProps & React.SVGProps<SVGSVGElement>>;

const Apps: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AppsProps) {
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
          id="memory-apps"
          viewBox="0 0 22 22"
        >
          <path d="M7 7H3V3H7M13 7H9V3H13M19 7H15V3H19M7 13H3V9H7M13 13H9V9H13M19 13H15V9H19M7 19H3V15H7M13 19H9V15H13M19 19H15V15H19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Apps;
