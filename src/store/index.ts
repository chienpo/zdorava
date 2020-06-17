import { combine } from 'effector';

import { $languageStore } from './language-store';
import { $storeFromRouter } from './router-store';

export const $store = combine({ $languageStore, $storeFromRouter });
