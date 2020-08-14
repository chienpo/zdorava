import { createElement } from 'react';
import { render } from '@testing-library/react';
import AppView from './app-view';

test('renders container', () => {
  const { container } = render(createElement(AppView, { router: {} }));
  expect(container).toBeInTheDocument();
});
