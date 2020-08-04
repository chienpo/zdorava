import { createElement } from 'react';
import { render } from 'react-testing-library';
import AppView from './app-view';

test('renders container', () => {
  const { container } = render(createElement(AppView));
  expect(container).toBeInTheDocument();
});
