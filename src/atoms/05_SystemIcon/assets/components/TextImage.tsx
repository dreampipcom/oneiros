/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface TextImageProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TextImageProps & React.SVGProps<SVGSVGElement>>;

const TextImage: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TextImageProps) {
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
          id="memory-text-image"
          viewBox="0 0 22 22"
        >
          <path d="M2 4H12V14H2V4M4 6V12H10V6H4M14 4H20V6H14V4M14 8H20V10H14V8M14 12H20V14H14V12M2 16H18V18H2V16Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TextImage;
