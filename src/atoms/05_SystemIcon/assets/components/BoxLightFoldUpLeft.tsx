/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface BoxLightFoldUpLeftProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<
  BoxLightFoldUpLeftProps & React.SVGProps<SVGSVGElement>
>;

const BoxLightFoldUpLeft: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: BoxLightFoldUpLeftProps) {
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
          id="memory-box-light-fold-up-left"
          viewBox="0 0 22 22"
        >
          <path d="M12 22H10V19H11V18H12V17H13V16H14V15H15V14H16V13H17V12H18V11H19V10H22V12H21V21H12M19 19V13H18V14H17V15H16V16H15V17H14V18H13V19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default BoxLightFoldUpLeft;
