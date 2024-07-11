/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface AnvilProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<AnvilProps & React.SVGProps<SVGSVGElement>>;

const Anvil: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: AnvilProps) {
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
          id="memory-anvil"
          viewBox="0 0 22 22"
        >
          <path d="M6 11H4V10H2V8H1V6H6M20 19H3V17H4V16H6V15H7V14H8V11H7V5H20V8H18V9H17V10H16V11H15V14H16V15H17V16H19V17H20Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Anvil;
