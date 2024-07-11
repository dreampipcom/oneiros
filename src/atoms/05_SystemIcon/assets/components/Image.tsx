/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ImageProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ImageProps & React.SVGProps<SVGSVGElement>>;

const Image: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ImageProps) {
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
          id="memory-image"
          viewBox="0 0 22 22"
        >
          <path d="M1 4H2V3H20V4H21V18H20V19H2V18H1V4M3 14H4V13H5V12H6V11H7V10H8V9H10V10H11V11H12V12H13V13H14V14H15V15H16V16H17V17H19V5H3V14M14 17V16H13V15H12V14H11V13H10V12H8V13H7V14H6V15H5V16H4V17H14M13 8H14V7H16V8H17V10H16V11H14V10H13V8Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Image;
