import { createElement } from 'react';
import { render } from '@testing-library/react';
import { $router } from 'store/router-store';

import { App } from './app';

test('Renders app', () => {
  const { container } = render(createElement(App, { router: $router }));
  expect(container).toBeInTheDocument();
});
