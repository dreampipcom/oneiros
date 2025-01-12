// index.ts
import { merge, invert } from 'lodash';
import * as SystemIcons from './components';
import * as BrandedIcons from './components-branded';

import { ESystemIcon as SystemIcon } from './components';
import { EBrandedIcon as BrandedIcon } from './components-branded';

export const ESystemIcon = invert(SystemIcon);
export const EBrandedIcon = invert(BrandedIcon);

export { SystemIcons, BrandedIcons };

const Icons = merge({}, SystemIcons, BrandedIcons);

export default Icons;
