/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TorchProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TorchProps & React.SVGProps<SVGSVGElement>>;

const Torch: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TorchProps) {
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
          id="memory-torch"
          viewBox="0 0 22 22"
        >
          <path d="M15 8H16V6H15M17 10H14V9H13V6H15V4H14V3H13V2H15V3H16V4H17V6H18V8H17M6 18H4V17H5V16H6V15H7V14H8V12H9V11H10V10H11V9H12V10H13V11H15V12H14V13H12V14H11V15H9V16H8V17H6Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Torch;
