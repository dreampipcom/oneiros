/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChestProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChestProps & React.SVGProps<SVGSVGElement>>;

const Chest: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChestProps) {
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
          id="memory-chest"
          viewBox="0 0 22 22"
        >
          <path d="M19 19H3V18H2V4H3V3H19V4H20V18H19M18 8V5H4V8M12 12V10H10V12M18 17V10H14V13H13V14H9V13H8V10H4V17Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Chest;
