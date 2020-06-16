import { createElement } from 'react';
import { render } from 'react-dom';

import './index.css';
import { App } from 'app';
import { router } from './router';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No root element');
}

const renderApp = (): void => {
  render(createElement(App, { router }), rootElement);
};

router.start(renderApp);

if (module.hot) {
  module.hot.accept(renderApp);
}
