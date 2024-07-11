/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface CashProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<CashProps & React.SVGProps<SVGSVGElement>>;

const Cash: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: CashProps) {
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
          id="memory-cash"
          viewBox="0 0 22 22"
        >
          <path d="M12 13H10V12H9V10H10V9H12V10H13V12H12M20 17H2V5H20M16 15V13H18V9H16V7H6V9H4V13H6V15Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Cash;
