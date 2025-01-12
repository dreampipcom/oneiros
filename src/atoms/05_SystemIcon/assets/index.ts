// index.ts
import { merge } from 'lodash';
import * as SystemIcons from './components';
import * as BrandedIcons from './components-branded';

export { ESystemIcon } from './components';
export { EBrandedIcon } from './components-branded';

const Icons = merge({}, SystemIcons, BrandedIcons);

export default Icons;
