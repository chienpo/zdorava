// Entry point

import { createElement } from 'react';
import { render } from 'react-dom';

import './index.css';
import { App } from 'app';
import { createRouter, routes } from './router';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No root element');
}

const router = createRouter(routes);

const renderApp = (): void => {
  render(createElement(App, { router }), rootElement);
};

router.start(renderApp);

// Hot reloading
if (module.hot) {
  module.hot.accept(renderApp);
}
