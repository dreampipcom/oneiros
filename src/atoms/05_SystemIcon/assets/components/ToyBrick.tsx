/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ToyBrickProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ToyBrickProps & React.SVGProps<SVGSVGElement>>;

const ToyBrick: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ToyBrickProps) {
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
          id="memory-toy-brick"
          viewBox="0 0 22 22"
        >
          <path d="M7 7H8V6H7M14 7H15V6H14M19 18H3V7H5V5H6V4H9V5H10V7H12V5H13V4H16V5H17V7H19M17 16V9H5V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ToyBrick;
