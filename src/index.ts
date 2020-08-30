import { createElement } from 'react';
import { render } from 'react-dom';

import { HotApp } from './hot-app';
import { router } from './router';

const rootElement = document.querySelector('#root');

if (rootElement === null) {
  throw new Error('No root element');
}

const renderApp = (): void => {
  render(createElement(HotApp, { router }), rootElement);
};

router.start(renderApp);

// Hot reloading
if (module.hot) {
  module.hot.accept(renderApp);
}
