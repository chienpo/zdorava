import { combine } from 'effector';

import { $languageStore } from './language-store';
import { $router } from './router-store';

export const $store = combine({ $languageStore, $router });
