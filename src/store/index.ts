import { combine } from 'effector';

import { $authStore } from './auth-store';
import { $languageStore } from './language-store';
import { $router } from './router-store';

export const $store = combine({ $languageStore, $router, $authStore });
