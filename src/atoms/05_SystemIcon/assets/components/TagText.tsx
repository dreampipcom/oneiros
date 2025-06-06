/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, @typescript-eslint/no-unused-vars:0, react/no-unknown-property:0, react/style-prop-object:0, no-shadow-restricted-names:0, max-len:0 */
// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
// @icons/SystemIcon/tag-text
import React from 'react';

interface TagTextProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

type TComponent = React.FC<TagTextProps & React.SVGProps<SVGSVGElement>>;

const TagText: TComponent = function ({
  color = 'black',
  width = 24,
  height = 24,
  ...props
}: TagTextProps) {
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
          id="memory-tag-text"
          viewBox="0 0 22 22"
        >
          <path d="M1 2H2V1H11V2H12V3H13V4H14V5H15V6H16V7H17V8H18V9H19V10H20V11H21V13H20V14H19V15H18V16H17V17H16V18H15V19H14V20H13V21H11V20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V11H1V2M3 10H4V11H5V12H6V13H7V14H8V15H9V16H10V17H11V18H13V17H14V16H15V15H16V14H17V13H18V11H17V10H16V9H15V8H14V7H13V6H12V5H11V4H10V3H3V10M14 11H15V13H14V12H13V11H12V10H11V9H10V7H11V8H12V9H13V10H14V11M10 12H11V13H12V15H11V14H10V13H9V12H8V10H9V11H10V12M5 4H7V5H8V7H7V8H5V7H4V5H5V4Z" />
        </svg>
      </g>
    </svg>
  );
};

export default TagText;
