// implicit dependency
import log from './logger';

export default message => {
  log(`this was logged: ${message}`);
};
