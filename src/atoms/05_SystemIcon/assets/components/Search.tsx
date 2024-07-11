/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
import React from 'react';

interface SearchProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<SearchProps & React.SVGProps<SVGSVGElement>>;

const Search: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: SearchProps) {
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
          id="memory-search"
          viewBox="0 0 22 22"
        >
          <path d="M19 20H18V19H17V18H16V17H15V16H14V15H13V14H11V15H6V14H4V13H3V11H2V6H3V4H4V3H6V2H11V3H13V4H14V6H15V11H14V13H15V14H16V15H17V16H18V17H19V18H20V19H19M11 13V12H12V11H13V6H12V5H11V4H6V5H5V6H4V11H5V12H6V13Z" />
        </svg>
      </g>
    </svg>
  );
};

export default Search;
