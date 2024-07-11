/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightFoldUpRightProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightFoldUpRightProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightFoldUpRight: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightFoldUpRightProps) {
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
          id="memory-box-light-fold-up-right"
          viewBox="0 0 22 22"
        >
          <path d="M12 22H10V21H1V12H0V10H3V11H4V12H5V13H6V14H7V15H8V16H9V17H10V18H11V19H12M9 19V18H8V17H7V16H6V15H5V14H4V13H3V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightFoldUpRight;
