import logMessage from './module-a';
import logger from './logger';

jest.mock('./logger');
// this is equivalent
// jest.mock('./logger', () => jest.fn());

test('logs a given message', () => {
  logMessage('this works!');
  expect(logger).toHaveBeenCalledWith('this was logged: this works!');
});
