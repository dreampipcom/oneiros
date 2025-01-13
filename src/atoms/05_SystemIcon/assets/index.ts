/* eslint  object-curly-newline:0, no-redeclare:0 */
// index.ts
import { merge } from 'lodash';
import * as SystemIcons from './components';
import * as BrandedIcons from './components-branded';

import { ESystemIcon } from './components';
import { EBrandedIcon } from './components-branded';

export const EIcon = { ...ESystemIcon, ...EBrandedIcon };
export type EIcon = EBrandedIcon | ESystemIcon;

export { SystemIcons, BrandedIcons, ESystemIcon, EBrandedIcon };

const Icons = merge({}, SystemIcons, BrandedIcons);

export default Icons;
