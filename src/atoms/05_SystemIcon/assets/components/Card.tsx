/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/card
import React from 'react';

interface CardProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CardProps & React.SVGProps<SVGSVGElement>>;

const Card: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CardProps) {
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
          id="memory-card"
          viewBox="0 0 22 22"
        >
          <path d="M2 3H20V4H21V18H20V19H2V18H1V4H2V3M3 5V17H19V5H3Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Card;
