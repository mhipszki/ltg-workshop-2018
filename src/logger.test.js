import log from './logger';

test('logs a message using console.log', () => {
  console.log = jest.fn();
  log('yay!');
  expect(console.log).toHaveBeenCalledWith('yay!');
});
