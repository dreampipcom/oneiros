/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/lightbulb
import React from 'react';

interface LightbulbProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<LightbulbProps & React.SVGProps<SVGSVGElement>>;

const Lightbulb: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: LightbulbProps) {
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
          id="memory-lightbulb"
          viewBox="0 0 22 22"
        >
          <path d="M8 19H14V21H8V19M8 18V14H7V13H6V12H5V11H4V5H5V4H6V3H7V2H8V1H14V2L15 2V3H16V4H17V5H18V11H17V12H16V13H15V14H14V18H8M13 12H14V11H15V10H16V6H15V5H14V4L13 4V3H9V4H8V5H7V6H6V10H7V11H8V12H9V13H10V16H12V13H13V12Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Lightbulb;
