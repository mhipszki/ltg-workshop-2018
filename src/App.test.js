import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import packageJson from '../package.json';

describe('example application', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

test('says Jest workshop', () => {
  // create a new DOM element
  const div = document.createElement('div');
  // render our application and mount that to the new element
  ReactDOM.render(<App />, div);
  // attach then new element to the DOM to make it available for testing
  document.body.appendChild(div);
  // find the title
  const title = document.querySelector('h1');
  // assert on the content of the title
  expect(title.innerHTML).toContain('Jest');
});

const selector = id => `[data-test-id="${id}"]`;

test('says Jest in the title', () => {
  // create a new DOM element
  const div = document.createElement('div');
  // render our application and mount that to the new element
  ReactDOM.render(<App />, div);
  // attach then new element to the DOM to make it available for testing
  document.body.appendChild(div);
  // find the title
  const title = document.querySelector(selector('page-title'));
  // assert on the content of the title
  expect(title.innerHTML).toContain('Jest');
});

const transform = data => ({
  ...data,
  version: `version ${data.version}`
});

test('transforms package.json contents to our needs', () => {
  expect(transform(packageJson)).toMatchSnapshot();
});

test('transforms package.json contents to our needs', () => {
  expect(transform(packageJson)).toEqual({
    browserslist: {
      development: [
        'last 2 chrome versions',
        'last 2 firefox versions',
        'last 2 edge versions'
      ],
      production: ['>0.25%', 'not op_mini all', 'ie 11']
    },
    dependencies: {
      react: '^16.4.1',
      'react-dom': '^16.4.1',
      'react-scripts': '^2.0.0-next.3e165448'
    },
    devDependencies: {
      'jest-puppeteer': '^3.2.1',
      puppeteer: '^1.5.0'
    },
    name: 'workshop',
    private: true,
    scripts: {
      build: 'react-scripts build',
      eject: 'react-scripts eject',
      start: 'react-scripts start',
      test: 'react-scripts test --env=jsdom',
      'test-e2e': 'jest -c e2e-tests/jest.config.js'
    },
    version: 'version 0.1.0'
  });
});
