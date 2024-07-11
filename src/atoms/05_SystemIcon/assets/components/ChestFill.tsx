/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface ChestFillProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<ChestFillProps & React.SVGProps<SVGSVGElement>>;

const ChestFill: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: ChestFillProps) {
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
          id="memory-chest-fill"
          viewBox="0 0 22 22"
        >
          <path d="M20 9H15V7H7V9H2V4H3V3H19V4H20M12 13H10V12H9V9H13V12H12M19 19H3V18H2V11H7V13H8V14H9V15H13V14H14V13H15V11H20V18H19Z" />
        </svg>
      </g>
    </svg>
  );
};

export default ChestFill;
