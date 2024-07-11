/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CardTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CardTextProps & React.SVGProps<SVGSVGElement>>;

const CardText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CardTextProps) {
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
          id="memory-card-text"
          viewBox="0 0 22 22"
        >
          <path d="M17 8V10H5V8H17M5 12H15V14H5V12M2 3H20V4H21V18H20V19H2V18H1V4H2V3M3 5V17H19V5H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default CardText;
